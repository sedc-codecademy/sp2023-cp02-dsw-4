const darkButton = document.querySelector(".darkButton")
const dbutton = document.querySelector("#dbutton")

themeCheck()

export function themeCheck() {
    if (localStorage.getItem("dark-mode") === "true") {
        document.body.classList.add("dark-mode")
        dbutton.innerHTML = "light_mode"
    } else {
        document.body.classList.remove("dark-mode")
        dbutton.innerHTML = "dark_mode"
    }
}

function applyDarkTheme() {
    document.body.classList.toggle("dark-mode")
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", true)
        dbutton.innerHTML = "light_mode"
    } else {
        localStorage.setItem("dark-mode", false)
        dbutton.innerHTML = "dark_mode"
    }
    darkButton.disabled = false
}

darkButton.addEventListener("click", (e) => {
    e.preventDefault()
    darkButton.disabled = true
    applyDarkTheme()
})