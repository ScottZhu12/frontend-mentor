"use strict";

const checkEmail = function () {
  const inputEmailEl = document.querySelector(".page-form__input");
  const btn = document.querySelector(".page-form__btn");
  const inputErrIconEl = document.querySelector(".page-form__icon");
  const inputErrTextEl = document.querySelector(".paragraph--err");
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const clearForm = function () {
    inputErrIconEl.classList.add("hidden");
    inputErrTextEl.classList.add("hidden");
    inputEmailEl.style.borderColor = "#ce9797";
    inputEmailEl.value = "";
    console.log("valid email");
  };

  const errForm = function () {
    inputErrIconEl.classList.remove("hidden");
    inputErrTextEl.classList.remove("hidden");
    inputEmailEl.style.borderColor = "#f96262";
  };

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    if (inputEmailEl.value.match(emailPattern)) clearForm();
    else errForm();
  });
};

checkEmail();
