import { fetchData } from "./index-temp.js";

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
        const sourceElem = elem.querySelector("source");
        const imgElem = elem.querySelector("img");

        imgElem.src = `${images.png}`;
        imgElem.alt = `${dict["crew-name"]}`;
        sourceElem.setAttribute("srcset", images.webp);
      } else {
        elem.innerHTML = val;
      }
    }
  });
});
