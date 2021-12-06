"use strict";

const popup = function () {
  const btn = document.querySelector(".card__content-detail__link");
  const btnImg = btn.querySelector("img");
  const popup = document.querySelector(".popup");
  const mainEl = document.querySelector(".main");

  const openPopup = function () {
    popup.classList.remove("hidden");
    btn.style.backgroundColor = "hsl(214, 17%, 51%)";
    btnImg.style.filter = "brightness(0) invert(1)";
  };

  const closePopup = function () {
    popup.classList.add("hidden");
    btn.style.backgroundColor = "hsl(210, 46%, 95%)";
    btnImg.style.filter = "none";
  };

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    openPopup();
  });

  mainEl.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      !e.target.classList.contains("card__content-detail__link") &&
      !e.target.parentNode.classList.contains("card__content-detail__link")
    )
      closePopup();
  });
};

popup();
