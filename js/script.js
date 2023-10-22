var nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

var humberger = document.getElementById("humberger");
humberger.addEventListener("click", showUl);

var ulNav = document.querySelector("ul");
function showUl() {
  const navUl = document.querySelector("ul");
  const rightIcon = document.getElementById("right-icon");
  const xIcon = document.getElementById("x-icon");
  if (navUl.classList.contains("hidden-ul")) {
    navUl.classList.remove("hidden-ul");
    navUl.classList.add("show-ul");
    rightIcon.classList.remove("show-right");
    rightIcon.classList.add("hidden-right");
    xIcon.classList.remove("hidden-x");
    xIcon.classList.add("show-x");
  } else {
    navUl.classList.remove("show-ul");
    navUl.classList.add("hidden-ul");
    rightIcon.classList.add("show-right");
    rightIcon.classList.remove("hidden-right");
    xIcon.classList.add("hidden-x");
    xIcon.classList.remove("show-x");
  }
}

var showDescriptionIcon = document.getElementById("show-description-icon");
showDescriptionIcon.addEventListener("click", showRplDescription);
function showRplDescription() {
  const rplDescription = document.getElementById("rpl-description");
  const downIconDescription = document.getElementById("down-icon-description");
  const upIconDescription = document.getElementById("up-icon-description");
  if (rplDescription.classList == "hidden-description") {
    rplDescription.classList.remove("hidden-description");
    rplDescription.classList.add("show-description");
    downIconDescription.classList.remove("show-down");
    downIconDescription.classList.add("hidden-down");
    upIconDescription.classList.remove("hidden-up");
    upIconDescription.classList.add("show-up");
  } else {
    rplDescription.classList.remove("show-description");
    rplDescription.classList.add("hidden-description");
    downIconDescription.classList.add("show-down");
    downIconDescription.classList.remove("hidden-down");
    upIconDescription.classList.add("hidden-up");
    upIconDescription.classList.remove("show-up");
  }
}
