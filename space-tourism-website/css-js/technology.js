import { fetchData } from "./index-temp.js";

const pageData = await fetchData();

const allOption = document.querySelectorAll(
  ".technology .dot-indicators button"
);

allOption.forEach((el) => {
  el.addEventListener("click", () => {
    const id = el.getAttribute("id");

    const techData = pageData.technology.find((d, i) => i === Number(id));

    const { name, images, description } = techData;

    const dict = {
      "tech-name": name,
      "tech-description": description,
      "tech-photo": images,
    };

    for (const [key, val] of Object.entries(dict)) {
      const elem = document.getElementById(key);
      if (key === "tech-photo") {
        const sourceElem = elem.querySelector("source");
        const imgElem = elem.querySelector("img");
        imgElem.src = `${images.landscape}`;
        imgElem.alt = `${dict["tech-name"]}`;
        sourceElem.setAttribute("srcset", images.portrait);
      } else {
        elem.innerHTML = val;
      }
    }
  });
});
