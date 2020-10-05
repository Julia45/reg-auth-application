const allUsersContainer = document.querySelector(".all-users");

class GetData {
  constructor(url) {
    this.url = url;
  }
  async getData() {
    const request = await fetch(this.url);
    return await request.json();
  }
}

function renderData() {
  const data = new GetData("https://5f79f290e402340016f935cf.mockapi.io/users/users");
  data.getData().then((res) => {
    for (var i = 0; i < res.length; i++) {

      let userName = document.createElement("input");
      userName.classList.add('user-name')
      userName.readOnly = true

      let userLogin = document.createElement("input");
      userLogin.classList.add('user-login')
      userLogin.readOnly = true

      userName.value = res[i].name
      userLogin.value = res[i].Login

      allUsersContainer.append(userName)
      allUsersContainer.append(userLogin)
    }
  });
}

function showElement(el) {
  el.style.display = "block"
}

function hideElement(el) {
  el.style.display = "none"
}
