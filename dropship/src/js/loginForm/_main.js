const loginDp = document.querySelector(".loginDropdown")
const loginBtn = document.querySelector("#loginButton")
const cancelBtn = document.querySelector(".cancel")
const registerUi = document.querySelector(".registerUi")
const loginUi = document.querySelector(".loginUi")
const registerBtn = document.querySelector(".registerButton")
const forgotBtn = document.querySelector(".forgotPassButton")
const forgotCancelBtn = document.querySelector(".cancelFP")

let rgOn = false
let LDP = false

let showLoginTimeout;
let closeLoginTimeout;

function tabSelect(element) {
  const children = element.querySelectorAll("*")
  if (!LDP) {
    element.setAttribute("tabindex", "-1", "autofocus")
    children.forEach((child) => {
      child.setAttribute("tabindex", "-1")
    })
    return
  }

  element.removeAttribute("tabindex")
  children.forEach((child) => {
    child.removeAttribute("tabindex")
  })
}

loginBtn.addEventListener("click", (e) => { // Event for login dropdown
  e.preventDefault()
  showLogin(loginDp)
})

function closeLogin(element) {
  clearTimeout(showLoginTimeout)
  closeLoginTimeout = setTimeout(() => {
    element.style.display = 'none'
  }, 500)
}

function showLogin(element) {
  clearTimeout(closeLoginTimeout)
  element.style.display = 'flex'
  showLoginTimeout = setTimeout(() => {
    element.showModal()
  }, 100)
}

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
  if (e.key === 'Escape') closeLogin(loginDp);
})


