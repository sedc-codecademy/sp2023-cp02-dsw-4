import { createSlice } from "@reduxjs/toolkit"

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        themeMode: localStorage.getItem("theme-mode") || "system",
    },
    reducers: {
        setThemeMode(state, action) {
            state.themeMode = action.payload
            localStorage.setItem("theme-mode", action.payload)
        },
    },
})

export const { setThemeMode } = themeSlice.actions

export default themeSlice.reducer