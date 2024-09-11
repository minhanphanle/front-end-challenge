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
