import { createSlice } from "@reduxjs/toolkit"

const navSettingsSlice = createSlice({
    name: "navSettings",
    initialState: {
        isSettingsOn: false,
    },
    reducers: {
        setIsSettingsOn(state, action) {
            state.isSettingsOn = action.payload
        },
    },
})

export const { setIsSettingsOn } = navSettingsSlice.actions

export default navSettingsSlice.reducer