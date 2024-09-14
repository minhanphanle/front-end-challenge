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

// First, we need to fetch our data from the JSON file
async function fetchData() {
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

const pageData = await fetchData();

const allPlanets = document.querySelectorAll(".destination .second-nav li");

allPlanets.forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.getAttribute("id");
    const capitalizedId = id.charAt(0).toUpperCase() + id.slice(1);
    const key = capitalizedId;

    let dataObj = pageData.destinations.find((obj) => obj.name === key);

    if (!dataObj) {
      dataObj = pageData.destinations[0];
    }

    const { images, description, distance, travel, name } = dataObj;

    const dict = {
      "distance-data": distance,
      "travel-data": travel,
      description: description,
      "planet-logo": images.webp,
      "planet-name": name,
    };

    for (const [key, value] of Object.entries(dict)) {
      const div = document.getElementById(key);

      if (key == "planet-logo") {
        div.src = value;
      }

      div.innerHTML = value;
    }
  });
});

const allCrew = document.querySelectorAll(".crew .dot-indicators button");

allCrew.forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.getAttribute("id");

    const crewData = pageData.crew.find((d, i) => i === Number(id));

    const { name, images, role, bio } = crewData;

    const dict = {
      "crew-name": name,
      "crew-role": role,
      "crew-description": bio,
      "crew-pic": images.webp,
    };

    for (const [key, val] of Object.entries(dict)) {
      const elem = document.getElementById(key);
      if (key === "crew-pic") {
        elem.src = val;
      }

      if (elem) {
        elem.innerHTML = val;
      }
    }
  });
});
