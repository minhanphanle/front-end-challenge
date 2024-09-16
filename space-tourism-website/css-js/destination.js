import { fetchData } from "./index-temp.js";

const pageData = await fetchData();

const allPlanets = document.querySelectorAll(".destination .second-nav button");

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
      "planet-logo": images,
      "planet-name": name,
    };

    for (const [key, value] of Object.entries(dict)) {
      const div = document.getElementById(key);

      if (key == "planet-logo") {
        const sourceElement = div.querySelector("source");
        const imgElement = div.querySelector("img");

        sourceElement.setAttribute("srcset", images.webp);
        imgElement.src = images.png;
        imgElement.alt = dict["planet-name"];
      } else {
        div.innerHTML = value;
      }
    }
  });
});
