const loginDp = document.querySelector(".loginDropdown")
const loginBtn = document.querySelector("#loginButton")
const cancelBtn = document.querySelector(".cancel")
const registerUi = document.querySelector(".registerUi")
const loginUi = document.querySelector(".loginUi")
const registerBtn = document.querySelector(".registerButton")
const forgotBtn = document.querySelector(".forgotPassButton")
const forgotCancelBtn = document.querySelector(".cancelFP")
const closeLoginBtn = document.querySelector(".closeLoginButton")

let rgOn = false
let LDP = false

let loginTimeouts = { closeTimeout: null, showTimeout: null };

const loginStates = {
  openTime: 100,
  closeTime: 500,

  enableLogin: () => {
    loginDp.showModal()
  },
  showLogin: () => {
    loginDp.style.display = 'flex'
  },
  hideLogin: () => {
    loginDp.close()
  },
  disableLogin: () => {
    loginDp.style.display = 'none';
  }
}

loginBtn.addEventListener("click", (e) => { // Event for login dropdown
  e.preventDefault()
  showElement(loginTimeouts, loginStates.openTime, loginStates.showLogin, loginStates.enableLogin)
})

closeLoginBtn.addEventListener('click', (e) => { // Event for closing login button
  closeElement(loginTimeouts, loginStates.closeTime, loginStates.hideLogin, loginStates.disableLogin)
})

cancelBtn.addEventListener('click', (e) => { // Evemt for turning off the registration section
  e.preventDefault()
  registerUi.classList.toggle('regOn')
  loginUi.classList.toggle('loginOff')
  rgOn = false
})

registerBtn.addEventListener('click', (e) => { // Event for pressing the sign up button and handling it's states
  if (rgOn) {
    console.log('Sign up button clicked')
    return
  }
  e.preventDefault()
  registerUi.classList.toggle('regOn')
  loginUi.classList.toggle('loginOff')
  rgOn = true
})

forgotCancelBtn.addEventListener('click', (e) => { // Event for turning off forgot password section
  e.preventDefault()
  loginDp.classList.remove("forgotPS")
})

forgotBtn.addEventListener('click', (e) => { // Event for forgot password section
  e.preventDefault()
  loginDp.classList.toggle("forgotPS")
})

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeElement(loginTimeouts, loginStates.closeTime, loginStates.hideLogin, loginStates.disableLogin)
})
