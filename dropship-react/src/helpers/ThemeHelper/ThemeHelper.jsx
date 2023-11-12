import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { applyDarkTheme, applyLightTheme, applySystemTheme } from "./themeFunctions"

export default function UseThemeEffects() {
    const themeMode = useSelector((state) => state.theme.themeMode)
    const [mediaQueryList, setMediaQueryList] = useState(window.matchMedia("(prefers-color-scheme: dark)"))

    useEffect(() => {
        const handleMediaQueryChange = (e) => {
            if (themeMode === "system") {
                setMediaQueryList(window.matchMedia("(prefers-color-scheme: dark)"))
            }
        }

        const mql = window.matchMedia("(prefers-color-scheme: dark)")
        mql.addEventListener("change", handleMediaQueryChange)

        return () => {
            mql.removeEventListener("change", handleMediaQueryChange)
        }
    }, [themeMode])

    useEffect(() => {
        if (themeMode === "system") {
            applySystemTheme(mediaQueryList.matches)
        } else if (themeMode === "dark") {
            applyDarkTheme()
        } else if (themeMode === "light") {
            applyLightTheme()
        }
    }, [themeMode, mediaQueryList.matches])
}
