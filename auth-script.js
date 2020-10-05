const USER_LOGIN = "admin";
const USER_PASSWORD = "12345";
const errorMessage = document.querySelector(".error-message");
const authBlock = document.querySelector(".auth-block");
const userLoginInput = document.querySelector(".auth-login");
const userPassInput = document.querySelector(".auth-pass");
const errorMessageEmpty = document.querySelector(".error-message_empty");
const authFrom = document.getElementById("auth-form")

authFrom.addEventListener("submit", (e) => {
  e.preventDefault()

  if (userLoginInput.value.length === 0 || userPassInput.value.length === 0) {
      showElement(errorMessageEmpty)
  } else if (userLoginInput.value !== USER_LOGIN || userPassInput.value !== USER_PASSWORD ) {
      showElement(errorMessage)
  }  else {
    showElement(allUsersContainer)
    hideElement(authBlock)
    renderData()
  }
});




