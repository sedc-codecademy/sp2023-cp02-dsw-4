const darkButton = document.querySelector(".darkButton")
const dbutton = document.querySelector("#dbutton")

const loginDp = document.querySelector(".loginDropdown")

themeCheck()

export function themeCheck() {
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode")
        loginDp.classList.add("dark-backdrop")
        dbutton.innerHTML = "light_mode"
    } else {
        loginDp.classList.remove("dark-backdrop")
        document.body.classList.remove("dark-mode")
        dbutton.innerHTML = "dark_mode"
    }
}

function applyDarkTheme() {
    document.body.classList.toggle("dark-mode")
    loginDp.classList.toggle("dark-backdrop")
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", true)
        dbutton.innerHTML = "light_mode"
    } else {
        localStorage.setItem("dark-mode", false)
        dbutton.innerHTML = "dark_mode"
    }
}

darkButton.addEventListener("click", (e) => {
    e.preventDefault()
    applyDarkTheme()
})