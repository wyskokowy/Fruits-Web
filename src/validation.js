const inputName = document.querySelector("#name");
const inputPhone = document.querySelector("#phone");
const inputEmail = document.querySelector("#email");
const labelName = document.querySelector("#name + .form__label");
const labelPhone = document.querySelector("#phone + .form__label");
const labelEmail = document.querySelector("#email + .form__label");

inputName.addEventListener("blur", nameValidation);
inputPhone.addEventListener("blur", phoneValidation);
inputEmail.addEventListener("blur", emailValidation);

function nameValidation() {
  const re = /^[A-Za-z]{1,30}$/;

  if (!re.test(inputName.value)) {
    labelName.textContent = "Please enter valid name";
    labelName.classList.add("invalid");
    inputName.classList.add("invalid");
  } else {
    labelName.textContent = "Full Name";
    labelName.classList.remove("invalid");
    inputName.classList.remove("invalid");
  }

  if (inputName.value === "") {
    labelName.textContent = "Full Name";
    labelName.classList.remove("invalid");
    inputName.classList.remove("invalid");
  }
}
function phoneValidation() {
  const reHome = /^((\(?0\d{4}\)?\s?\d{3}\s?\d{3})|(\(?0\d{3}\)?\s?\d{3}\s?\d{4})|(\(?0\d{2}\)?\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;
  const reMobile = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

  if (!reHome.test(inputPhone.value) || !reMobile.test(inputPhone.value)) {
    labelPhone.textContent = "Please enter valid UK phone number";
    labelPhone.classList.add("invalid");
    inputPhone.classList.add("invalid");
  } else {
    labelPhone.textContent = "Phone Number";
    labelPhone.classList.remove("invalid");
    inputPhone.classList.remove("invalid");
  }

  if (inputPhone.value === "") {
    labelPhone.textContent = "Phone Number";
    labelPhone.classList.remove("invalid");
    inputPhone.classList.remove("invalid");
  }
}
function emailValidation() {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,5}$/;

  if (!re.test(inputEmail.value)) {
    labelEmail.textContent = "Please enter valid e-mail address";
    labelEmail.classList.add("invalid");
    inputEmail.classList.add("invalid");
  } else {
    labelEmail.textContent = "E-mail";
    labelEmail.classList.remove("invalid");
    inputEmail.classList.remove("invalid");
  }

  if (inputEmail.value === "") {
    labelEmail.textContent = "E-mail";
    labelEmail.classList.remove("invalid");
    inputEmail.classList.remove("invalid");
  }
}
