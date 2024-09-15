import {
  crewHTML,
  destinationHTML,
  mainHTML,
  technologyHTML,
  notFoundHTML,
} from "./main-contents-html.js";

const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector(".primary-navigation");

mobileNavToggle.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  if (!nav.classList.contains("active")) {
    nav.setAttribute("aria-expanded", "false");
  } else {
    nav.setAttribute("aria-expanded", "true");
  }

  mobileNavToggle.classList.toggle("expanded");
});

/**
 * SPA Client Side Routing and content swapping
 */

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

// // Define our routes
// const routes = {
//   "/": "home",
//   "/destination": "destination",
//   "/crew": "crew",
//   "/technology": "technology",
// };

// // This function will update the content based on the current route
// async function updateContent(route) {
//   // TODO: Await the data from fetchData()
//   const data = await fetchData();

//   // TODO: Get the main content element from the DOM
//   const main = document.querySelector("main");

//   // TODO: Add new classes to the content element based on the current route
//   // TODO: Update the content based on the route
//   // Use a switch statement to handle different routes
//   // For each route:
//   //   - Create the HTML structure for that page
//   //   - Set the innerHTML of the content element
//   // TODO: Update the body class to match the current page
//   let pageData;

//   switch (route) {
//     case "/":
//       main.innerHTML = mainHTML;
//       break;

//     case "/destination":
//       pageData = data["destinations"];
//       main.innerHTML = destinationHTML;
//       break;
//     case "/technology":
//       pageData = data["technology"];
//       main.innerHTML = technologyHTML;
//       break;
//     case "/crew":
//       pageData = data["crew"];
//       main.innerHTML = crewHTML;
//       break;
//     default:
//       main.innerHTML = notFoundHTML;
//   }

//   main.classList.add(`grid-container--${routes[route]}`);
//   document.body.className = `${routes[route]}`;
//   updateActiveNavLink(route);
// }

// function updateActiveNavLink(currentRoute) {
//   document.querySelectorAll(".primary-navigation a").forEach((link) => {
//     link.classList.toggle("active", link.getAttribute("href") === currentRoute);
//   });
// }

// // This function will handle navigation when a link is clicked
// async function handleNavigation(event) {
//   const link = event.target.closest("a");
//   if (!link || !link.href || !link.href.startsWith(window.location.origin))
//     return;
//   console.log("nav called");
//   // TODO: Prevent the default link behavior
//   event.preventDefault();

//   const href = link.getAttribute("href");

//   if (href && routes.hasOwnProperty(href)) {
//     history.pushState({}, "", href); // update the URL without reloading the page
//     await updateContent(href);
//     console.log(history.length);
//   }
// }

// // This function will initialize our application
// async function init() {
//   // TODO: Select all navigation links
//   const allLinks = document.querySelectorAll("a");

//   // TODO: Add a click event listener to each navigation link
//   // The event listener should call handleNavigation

//   allLinks.forEach((a) => {
//     a.addEventListener("click", async (e) => {
//       await handleNavigation(e);
//     });
//   });

//   // TODO: Add a popstate event listener to the window
//   // This will handle browser back/forward navigation
//   window.addEventListener("popstate", async () => {
//     await updateContent(window.location.pathname);

//     console.log(window.location.pathname);
//   });

//   // TODO: Call updateContent with the initial route (window.location.pathname)
//   await updateContent(window.location.pathname);
//   console.log(window.location.pathname);
// }

// // TODO: Add an event listener for DOMContentLoaded
// // When the DOM is loaded, call the init function
// document.addEventListener("DOMContentLoaded", init);

// // Additional features to consider implementing:
// // - Loading indicators while content is being fetched
// // - Error handling for failed data fetches or invalid routes
// // - Smooth transitions between pages
// // - Updating the active state of navigation links
