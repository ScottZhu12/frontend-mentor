"use strict";

const emailValidate = function () {
  const inputEmailEl = document.querySelector(".form__input--email");
  const inputBtnEl = document.querySelector(".form__input--submit");
  const errText = document.querySelector(".err-text");
  const emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const emailErr = function () {
    inputEmailEl.style.border = "1px solid #ff5263";
    errText.classList.remove("hidden");
  };

  const emailSuccess = function () {
    inputEmailEl.style.border = "1px solid #969696";
    errText.classList.add("hidden");
  };

  inputBtnEl.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputEmailEl.value.match(emailValid)) emailSuccess();
    else emailErr();
  });
};

emailValidate();
