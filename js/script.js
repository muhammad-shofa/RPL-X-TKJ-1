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

var showRplDescriptionIcon = document.getElementById(
  "show-rpl-description-icon"
);
showRplDescriptionIcon.addEventListener("click", showRplDescription);
function showRplDescription() {
  const rplDescription = document.getElementById("rpl-description");
  const downIconDescription = document.getElementById(
    "down-rpl-icon-description"
  );
  const upIconDescription = document.getElementById("up-rpl-icon-description");
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

var showTkjDescriptionIcon = document.getElementById(
  "show-tkj-description-icon"
);
showTkjDescriptionIcon.addEventListener("click", showTkjDescription);
function showTkjDescription() {
  const tkjDescription = document.getElementById("tkj-description");
  const downIconDescription = document.getElementById(
    "down-tkj-icon-description"
  );
  const upIconDescription = document.getElementById("up-tkj-icon-description");
  if (tkjDescription.classList == "hidden-description") {
    tkjDescription.classList.remove("hidden-description");
    tkjDescription.classList.add("show-description");
    downIconDescription.classList.remove("show-down");
    downIconDescription.classList.add("hidden-down");
    upIconDescription.classList.remove("hidden-up");
    upIconDescription.classList.add("show-up");
  } else {
    tkjDescription.classList.remove("show-description");
    tkjDescription.classList.add("hidden-description");
    downIconDescription.classList.add("show-down");
    downIconDescription.classList.remove("hidden-down");
    upIconDescription.classList.add("hidden-up");
    upIconDescription.classList.remove("show-up");
  }
}


const allCardMembers = document.getElementById("all-card-members");
const slideRight = document.getElementById("slide-right");
const slideLeft = document.getElementById("slide-left");

let scrollAmount = 0;

slideLeft.addEventListener("click", function () {
  if (scrollAmount < 0) {
    scrollAmount = 350;
  }

  scrollAmount -= 350;
  allCardMembers.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});

slideRight.addEventListener("click", function () {
  scrollAmount += 350;
  allCardMembers.scrollTo({
    left: scrollAmount,
    behavior: "smooth",
  });
});

