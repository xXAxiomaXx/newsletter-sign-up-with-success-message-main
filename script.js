const emailInp = document.querySelector("#typeEmail");
const regSection = document.querySelector("#register");
const successCard = document.querySelector("#success-card");
const personalEmail = document.querySelector("#personalEmail");

const submit = document.querySelector("#submit");

const error = document.querySelector("small");

submit.addEventListener("click", function onClick() {
  let email = emailInp.value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;

  if (email == "") {
    error.style.display = "block";
    emailInp.style.background = "#ffe8e6";
    emailInp.style.borderColor = "#e46d6b";
    emailInp.classList.add("error")
  } else {
    if (emailRegex.test(email)) {
      error.style.display = "none";
      emailInp.style.background = "white";
      emailInp.style.borderColor = "#d4d4d4";
      successCard.style.display = "flex";
      regSection.style.display = "none";
    } else {
      error.style.display = "block";
      emailInp.style.background = "#ffe8e6";
      emailInp.style.borderColor = "#e46d6b";
      emailInp.style.color = "#e46d6b"
    }
  }
  personalEmail.innerHTML = emailInp.value;
});
