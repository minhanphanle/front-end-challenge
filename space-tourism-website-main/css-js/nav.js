const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const nav = document.querySelector("#primary-navigation");

mobileNavToggle.addEventListener("click", (e) => {
  nav.classList.contains("active")
    ? nav.classList.remove("active")
    : nav.classList.add("active");

  if (!nav.classList.contains("active")) {
    nav.setAttribute("aria-expanded", "false");
  } else {
    nav.setAttribute("aria-expanded", "true");
  }

  if (!mobileNavToggle.classList.contains("expanded")) {
    mobileNavToggle.classList.add("expanded");
  } else {
    mobileNavToggle.classList.remove("expanded");
  }
});
