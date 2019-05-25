var buyButton = document.querySelectorAll(".button__buy");
var overlay = document.querySelector(".overlay");
var popup = document.querySelector(".modal-cart-adding");
var sizeButton = document.querySelector(".modal-cart-adding__size");
var close = document.querySelector(".modal-cart-adding__button");

if (buyButton) {
  for (var i = 0; i < buyButton.length; i++) {
    buyButton[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-cart-adding--show");
      overlay.classList.add("overlay--show");
      sizeButton.focus();
    })
  };
}

if (overlay) {
  overlay.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--show");
    popup.classList.remove("modal-cart-adding--show");
  });
}

if (close) {
  close.addEventListener("click", function (evt) {
    evt.preventDefault();
    overlay.classList.remove("overlay--show");
    popup.classList.remove("modal-cart-adding--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-cart-adding--show")) {
      overlay.classList.remove("overlay--show");
      popup.classList.remove("modal-cart-adding--show");
    }
  }
});

var menu = document.querySelectorAll(".main-nav__menu");
var toggle = document.querySelector(".main-nav__toggle");

for (var i = 0; i < menu.length; i++) {
  menu[i].classList.add("main-nav__menu--closed");
  toggle.classList.add("main-nav__toggle--closed");
};

toggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].classList.contains("main-nav__menu--closed")) {
      menu[i].classList.remove("main-nav__menu--closed");
      toggle.classList.remove("main-nav__toggle--closed");
      toggle.classList.add("main-nav__toggle--opened");
    } else {
      menu[i].classList.add("main-nav__menu--closed");
      toggle.classList.remove("main-nav__toggle--closed");
      toggle.classList.add("main-nav__toggle--closed");
    }
  };
});
