import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { applyDarkTheme, applyLightTheme, applySystemTheme } from "./themeFunctions"

export default function UseThemeEffects() {
    const themeMode = useSelector((state) => state.theme.themeMode)
    const [mediaQueryList, setMediaQueryList] = useState(window.matchMedia("(prefers-color-scheme: dark)"))

    useEffect(() => {
        if (themeMode === "system") {
            applySystemTheme(themeMode)
        } else if (themeMode === "dark") {
            applyDarkTheme()
        } else if (themeMode === "light") {
            applyLightTheme()
        }
    }, [themeMode, mediaQueryList]) // Theme checker UseEffect

    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", () => {
            if (themeMode === "system") {
                setMediaQueryList(window.matchMedia("(prefers-color-scheme: dark)"))
            }
        })
}
