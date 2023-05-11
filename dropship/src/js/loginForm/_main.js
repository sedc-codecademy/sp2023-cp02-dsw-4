const loginDp = document.querySelector(".loginDropdown")
const loginBtn = document.querySelector("#loginButton")
const cancelBtn = document.querySelector(".cancel")
const registerUi = document.querySelector(".registerUi")
const loginUi = document.querySelector(".loginUi")
const registerBtn = document.querySelector(".registerButton")
const forgotBtn = document.querySelector(".forgotPassButton")
const forgotCancelBtn = document.querySelector(".cancelFP")

let rgOn = false

loginBtn.addEventListener("click", () => {
  loginDp.classList.toggle("on")
})

cancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
  registerUi.classList.toggle('regOn')
  loginUi.classList.toggle('loginOff')
  rgOn = false
})

registerBtn.addEventListener('click', (e) => {
  if(rgOn){
    console.log('Sign up button clicked')
    return
  }
  e.preventDefault()
  registerUi.classList.toggle('regOn')
  loginUi.classList.toggle('loginOff')
  rgOn = true
})

forgotCancelBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loginDp.classList.toggle("forgotPS")
})

forgotBtn.addEventListener('click', (e) => {
  e.preventDefault()
  loginDp.classList.toggle("forgotPS")
})


