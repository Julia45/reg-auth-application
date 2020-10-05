const passInput = document.querySelector(".pass")
const passConfirmInput = document.querySelector(".conf-pass");
const errorMessage = document.querySelector(".error-message");
const regBlock = document.querySelector(".registration-block");
const inputName = document.getElementById("username");
const inputLogin = document.getElementById("login");
const regForm = document.getElementById("reg-form");

regForm.addEventListener("submit", (e) => {

  e.preventDefault()

  if (inputName.value.length == 0) {
    inputName.style.border = "2px solid red";
  } else if (inputLogin.value.length == 0) {
    inputLogin.style.border = "2px solid red";
  } else if (passInput.value !== passConfirmInput.value ||
    passInput.value.length == 0 && passConfirmInput.value.length == 0) {
    watchError()
  } else {
    hideElement(regBlock)
    showElement(allUsersContainer)
    renderData()
  }
});

function watchError() {
  errorMessage.style.display = "block";
  passInput.style.border = "2px solid red";
  passConfirmInput.style.border = "2px solid red";
}









