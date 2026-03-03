const fadeScreen = document.getElementById("fadeScreen");

function shakeScreen() {

  document.body.classList.add("shake");

  setTimeout(() => {
    document.body.classList.remove("shake");
  }, 2000);
}

function fadeOut(callback) {

  fadeScreen.classList.add("fade-in");

  setTimeout(() => {
    callback();
    fadeIn();
  }, 500);
}

function fadeIn() {
  fadeScreen.classList.remove("fade-in");
}