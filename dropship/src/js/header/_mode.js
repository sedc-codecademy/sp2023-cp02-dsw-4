const darkButton = document.querySelector(".darkButton")
const dbutton = document.querySelector("#dbutton")

const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches; ////////////

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

// function applyDarkTheme() {
//     document.body.classList.toggle("dark-mode")
//     if (document.body.classList.contains("dark-mode")) {
//         localStorage.setItem("dark-mode", true)
//         dbutton.innerHTML = "light_mode"
//     } else {
//         localStorage.setItem("dark-mode", false)
//         dbutton.innerHTML = "dark_mode"
//     }
//     darkButton.disabled = false
// }

darkButton.addEventListener("click", (e) => {
    e.preventDefault()
    darkButton.disabled = true
    toggleTheme()
})

function setTheme(theme) {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode', theme === 'dark');
}

function toggleTheme() {
    const body = document.querySelector('body');
    const isDarkMode = body.classList.contains('dark-mode');
    setTheme(isDarkMode ? 'light' : 'dark');
}

// Detect user's system preference and set the theme accordingly
setTheme(prefersDarkMode ? 'dark' : 'light');

// Listen for changes in system preference and update the theme
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    setTheme(e.matches ? 'dark' : 'light');
});
