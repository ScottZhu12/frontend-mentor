"use strict";

const emailCheck = function () {
  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const emailInputEl = document.querySelector(".form__input-email");
  const btnEl = document.querySelector(".form__btn");
  const inputErrEl = document.querySelector(".form__input-error");

  btnEl.addEventListener("click", function (e) {
    e.preventDefault();

    if (!emailInputEl.value.match(validEmail)) {
      inputErrEl.style.display = "block";
    } else {
      inputErrEl.style.display = "none";
      emailInputEl.value = "";
      console.log("your email has been submitted!");
    }
  });
};

emailCheck();
