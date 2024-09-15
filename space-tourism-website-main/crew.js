import { fetchData } from "./index.js";

const pageData = await fetchData();

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
      "crew-pic": images,
    };

    for (const [key, val] of Object.entries(dict)) {
      const elem = document.getElementById(key);
      if (key === "crew-pic") {
        elem.innerHTML = `            <source srcset=${images.webp} type="image/webp">
        <img src=${images.png} alt="${dict["crew-role"]} ${dict["crew-name"]}">`;
      }

      if (elem) {
        elem.innerHTML = val;
      }
    }
  });
});
