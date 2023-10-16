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
    },
})



export const { toggleCatDropDown } = catDropDownSlice.actions

export default catDropDownSlice.reducer
