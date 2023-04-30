const loginDp = document.querySelector(".loginDropdown");
const loginBtn = document.querySelector("#loginButton");

loginBtn.addEventListener("click", () => {
  loginDp.classList.toggle("on");
});
