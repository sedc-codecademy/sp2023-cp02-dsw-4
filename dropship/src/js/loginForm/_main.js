const loginDp = document.querySelector(".loginDropdown")
const loginBtn = document.querySelector("#loginButton")
const cancelBtn = document.querySelector(".cancel")
const registerUi = document.querySelector(".registerUi")
const loginUi = document.querySelector(".loginUi")
const registerBtn = document.querySelector(".registerButton")
const forgotBtn = document.querySelector(".forgotPassButton")
const forgotCancelBtn = document.querySelector(".cancelFP")

let rgOn = false

loginBtn.addEventListener("click", () => { // Event for login dropdown
  loginDp.classList.toggle("on")
})

cancelBtn.addEventListener('click', (e) => { // Evemt for turning off the registration section 
  e.preventDefault()
  registerUi.classList.toggle('regOn')
  loginUi.classList.toggle('loginOff')
  rgOn = false
})

registerBtn.addEventListener('click', (e) => { // Event for pressing the sign up button and handling it's states
  if(rgOn){
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

document.body.addEventListener('click', (e) => { // Event listener for turning off login drop down
  if(e.target === loginBtn) return  
  if (!loginDp.contains(e.target)) loginDp.classList.remove("on") 
})

