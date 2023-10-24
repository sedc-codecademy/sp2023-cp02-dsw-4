const themeButton = document.querySelector('.themeButton')
const loginDp = document.querySelector(".loginDropdown")

const darkbtn = document.querySelector(".darkButton")
const lightBtn = document.querySelector(".lightButton")
const systemBtn = document.querySelector(".systemDefault")

const themeButtonsArray = [darkbtn, lightBtn, systemBtn]

function toggleThemeButton(currentButton) {
    for (let i = 0; i < themeButtonsArray.length; i++) {
        if (themeButtonsArray[i].classList.contains("selectedThemeMode")) {
            themeButtonsArray[i].classList.remove("selectedThemeMode")
        }
    }
    currentButton.classList.add('selectedThemeMode')
}

let currentTheme = ""

themeCheck()

export function themeCheck() {
    const themeMode = localStorage.getItem("theme-mode")
    const systemDarkMode =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches

    if (themeMode === "system") {
        toggleThemeButton(systemBtn)
        if (systemDarkMode) {
            applyDarkTheme()
        } else {
            applyLightTheme()
        }
    } else if (themeMode === "dark") {
        toggleThemeButton(darkbtn)
        applyDarkTheme()
    } else if(themeMode === "light"){
        toggleThemeButton(lightBtn)
        applyLightTheme()
    } else{
        toggleThemeButton(systemBtn)
        localStorage.setItem("theme-mode", "system")
        if (systemDarkMode) {
            applyDarkTheme()
        } else {
            applyLightTheme()
        }
    }
}

function applyDarkTheme() {
    document.body.classList.remove("light-mode")
    document.body.classList.add("dark-mode")
    loginDp.classList.add("dark-backdrop")
    currentTheme = "dark"
}

function applyLightTheme() {
    document.body.classList.remove("dark-mode")
    document.body.classList.add("light-mode")
    loginDp.classList.remove("dark-backdrop")
    currentTheme = "light"
}

function applySystemTheme() {
    const themeMode = localStorage.getItem("theme-mode")
    const systemDarkMode =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    if (systemDarkMode) {
        if (themeMode == "dark") return console.log(themeMode, currentTheme)
        applyDarkTheme()
        return
    } else {
        if (themeMode == "light") return console.log(themeMode, currentTheme)
        applyLightTheme()
        return
    }
}

darkbtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("theme-mode", "dark")
    toggleThemeButton(darkbtn)
    applyDarkTheme()
})
lightBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("theme-mode", "light")
    toggleThemeButton(lightBtn)
    applyLightTheme()
})
systemBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.setItem("theme-mode", "system")
    toggleThemeButton(systemBtn)
    applySystemTheme()
})

themeButton.addEventListener("click", (e) => {
    e.preventDefault()
    notifcationToggle(themeDropDown)
    themeDropDown.classList.toggle("alertOn")
})

// Event listener for system theme changes
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (localStorage.getItem("theme-mode") === "system") { // Checks if theme mode is system
        applySystemTheme() // Aplies system theme if needed
    }
})