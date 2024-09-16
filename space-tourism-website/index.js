import {
  crewHTML,
  destinationHTML,
  mainHTML,
  technologyHTML,
  notFoundHTML,
} from "./css-js/main-contents-html.js";

/**
 * SPA Client Side Routing and content swapping
 */

// document
//   .querySelector(".skip-to-main-content")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector("#main-content").focus();
//   });

export async function fetchData() {
  const path = "starter-code/data.json";

  try {
    const res = await fetch(path);

    if (!res.ok) {
      throw new Error(`Response status: ${res.status}`);
    }

    const json = await res.json();
    return json;
  } catch (err) {
    console.error(error.message);
  }
}

// Define our routes
const routes = {
  "/space-tourism-website/": "home",
  "/space-tourism-website/destination": "destination",
  "/space-tourism-website/crew": "crew",
  "/space-tourism-website/technology": "technology",
};

// This function will update the content based on the current route
async function updateContent(route) {
  const main = document.querySelector("main");

  // Add new classes to the content element based on the current route
  // Update the content based on the route
  // For each route:
  //   - Set the innerHTML of the content element

  switch (route) {
    case "/space-tourism-website/":
      main.innerHTML = mainHTML;
      break;

    case "/space-tourism-website/destination":
      main.innerHTML = destinationHTML;
      break;
    case "/space-tourism-website/technology":
      main.innerHTML = technologyHTML;
      break;
    case "/space-tourism-website/crew":
      main.innerHTML = crewHTML;
      break;
    default:
      main.innerHTML = notFoundHTML;
  }

  main.className = `grid-container grid-container--${routes[route]}`;
  document.body.className = `${routes[route]}`;

  let scriptsToLoad;

  if (route !== "/space-tourism-website/") {
    scriptsToLoad = [`css-js/${routes[route]}.js`, "css-js/tabs.js"];
  } else {
    scriptsToLoad = [];
  }

  manageScripts(scriptsToLoad);

  updateActiveNavLink(route);
}

// Helper function to manage scripts:
// - delete all scripts except for index.js
// - load scripts to attach listeners for tabs navigation and dynamic content
function manageScripts(scriptsToLoad) {
  // Remove all script tags except index.js
  document.querySelectorAll("script").forEach((script) => {
    if (
      script.src &&
      !script.src.endsWith("index.js") &&
      !script.src.endsWith("nav.js")
    ) {
      script.remove();
    }
  });

  // Load new scripts
  scriptsToLoad.forEach((src) => {
    const script = document.createElement("script");
    script.src = src + "?v=" + new Date().getTime(); // Add timestamp to prevent caching
    script.type = "module";
    document.body.appendChild(script);
  });
}

function updateActiveNavLink(currentRoute) {
  document.querySelectorAll(".primary-navigation a").forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === currentRoute);
  });
}

// This function will handle navigation when a link is clicked
async function handleNavigation(event) {
  const link = event.target.closest("a");
  if (!link || !link.href || !link.href.startsWith(window.location.origin))
    return;
  event.preventDefault();

  const href = link.getAttribute("href");

  if (href && routes.hasOwnProperty(href)) {
    history.pushState({}, "", href); // update the URL without reloading the page
    await updateContent(href);
  }
}

// This function will initialize our application
async function init() {
  const allLinks = document.querySelectorAll("a");

  allLinks.forEach((a) => {
    a.addEventListener("click", async (e) => {
      await handleNavigation(e);
    });
  });

  // Add a popstate event listener to the window
  // This will handle browser back/forward navigation
  window.addEventListener("popstate", async () => {
    await updateContent(window.location.pathname);
  });

  // Call updateContent with the initial route (window.location.pathname)
  await updateContent(window.location.pathname);
}

// TODO: Add an event listener for DOMContentLoaded
// When the DOM is loaded, call the init function
document.addEventListener("DOMContentLoaded", init);

// Additional features to consider implementing:
// - Loading indicators while content is being fetched
// - Error handling for failed data fetches or invalid routes
// - Smooth transitions between pages
// - Updating the active state of navigation links
