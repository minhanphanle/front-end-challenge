const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role="tab"]');

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let curr = 0;

function changeTabFocus(e) {
  const keydownLeft = 37;
  const keydownRight = 39;

  // when people first get to the page, only allow the first item to be focusable
  // when press left or right, then change the current tab to be infocusable
  if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
    tabs[curr].setAttribute("tabindex", -1);
  }

  if (e.keyCode === keydownLeft) {
    curr = (curr - 1 + tabs.length) % tabs.length;
    console.log("curr left", curr);
  }

  if (e.keyCode === keydownRight) {
    curr = (curr + 1) % tabs.length;
    console.log("curr right", curr);
  }

  // change the current tabs to be focusable
  tabs[curr].setAttribute("tabindex", 0);
  tabs[curr].focus();
}

function changeTabPanel(e) {
  const targetTab = e.target;
  const tabContainer = targetTab.parentNode;

  const prevElem = tabContainer.querySelector('[aria-selected="true"]');

  prevElem.setAttribute("aria-selected", false);

  e.target.setAttribute("aria-selected", true);

  e.target.classList.add("active");

  prevElem.classList.remove("active");

  e.target;
}
