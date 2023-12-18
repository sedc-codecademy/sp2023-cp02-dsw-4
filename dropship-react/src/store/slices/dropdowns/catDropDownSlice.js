import { createSlice } from "@reduxjs/toolkit"

const catDropDownSlice = createSlice({
    name: "catDropDown",
    initialState: {
        showDropDown: false,
    },
    reducers: {
        toggleCatDropDown(state) {
            state.showDropDown = !state.showDropDown
        },
        turnOffCatDP(state) {
            state.showDropDown = false
        },
    },
})



export const { toggleCatDropDown,turnOffCatDP } = catDropDownSlice.actions

export default catDropDownSlice.reducer
