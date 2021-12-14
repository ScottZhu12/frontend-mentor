"use strict";

const formValidation = function () {
  const inputElFirstName = document.querySelector(".signup__form__input--fn");
  const inputElLastName = document.querySelector(".signup__form__input--ln");
  const inputElEmail = document.querySelector(".signup__form__input--email");
  const inputElPassword = document.querySelector(
    ".signup__form__input--password"
  );
  const btn = document.querySelector(".signup__form__btn");
  const validEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const inputError = function (el) {
    const elNextSibling = el.nextElementSibling;
    el.style.border = "1px solid #ff7a7a";
    elNextSibling.classList.remove("hidden");
    elNextSibling.nextElementSibling.classList.remove("hidden");
  };

  const inputSuccess = function (el) {
    const elNextSibling = el.nextElementSibling;
    el.style.border = "1px solid #5e54a4";
    elNextSibling.classList.add("hidden");
    elNextSibling.nextElementSibling.classList.add("hidden");
  };

  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const firstName = inputElFirstName.value.trim();
    const lastName = inputElLastName.value.trim();
    const email = inputElEmail.value.trim();
    const password = inputElPassword.value.trim();

    if (firstName === "") inputError(inputElFirstName);
    else inputSuccess(inputElFirstName);

    if (lastName === "") inputError(inputElLastName);
    else inputSuccess(inputElLastName);

    if (password === "") inputError(inputElPassword);
    else inputSuccess(inputElPassword);

    if (!email.match(validEmail) || email === "") {
      inputError(inputElEmail);
      inputElEmail.style.color = "#ff7a7a";
    } else {
      inputSuccess(inputElEmail);
      inputElEmail.style.color = "#3e3c49";
    }
  });
};

formValidation();
