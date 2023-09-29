import { createSlice } from "@reduxjs/toolkit"

const acDropDownSlice = createSlice({
    name: "acDropDown",
    initialState: {
        showDropDown: false,
    },
    reducers: {
        toggleDropDown(state) {
            state.showDropDown = !state.showDropDown
        },
    },
})



export const { toggleDropDown } = acDropDownSlice.actions

export default acDropDownSlice.reducer
