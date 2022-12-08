function displayMenu() {
  console.log("click");
  let x = document.getElementById("nav__menu");
  if (x.className === "nav__menu") {
    x.className += " responsive";
  } else {
    x.className = "nav__menu";
  }
}

function displayStep(num) {
  let stepsButton = document.getElementsByClassName("num_step");
  let steps = document.getElementsByClassName("install_step");
  for (let i = 0; i < steps.length; i++) {
    steps[i].className = "install_step hide_step";
    stepsButton[i].id = "";
  }
  stepsButton[num - 1].id = "active";
  let step = document.getElementById("step--" + num);
  if (step.className === "install_step") {
    step.className += " hide_step";
  } else {
    step.className = "install_step";
  }
}

function displayStickyNav() {
  let navMenu = document.getElementById("nav__menu");
  let stickyNav = document.getElementById("sticky");
  let sticky = navMenu.offsetTop + 50;

  if (window.pageYOffset >= sticky) {
    stickyNav.style.display = "grid";
  } else {
    stickyNav.style.display = "none";
  }
}

function displayStickyUp() {
  let stickyNav = document.getElementById("sticky_up");
  let sticky = 500;

  if (window.pageYOffset >= sticky) {
    stickyNav.style.display = "grid";
  } else {
    stickyNav.style.display = "none";
  }
}

window.onload = function () {
  if (window.innerWidth < 1024) {
    let menuIcon = document.getElementById("menu_icon");
    menuIcon.addEventListener("click", displayMenu);
    let navMenuAnchor = document.getElementsByClassName("nav__menu__a");
    for (let i = 0; i < navMenuAnchor.length; i++) {
      navMenuAnchor[i].addEventListener("click", displayMenu);
    }
    window.onscroll = function () { displayStickyUp() };
  }

  if (window.innerWidth >= 1024) {
    window.onscroll = function () { displayStickyNav() };
  }
};