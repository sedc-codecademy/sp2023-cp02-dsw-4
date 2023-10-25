import { createSlice } from "@reduxjs/toolkit"

const acDropDownSlice = createSlice({
    name: "acDropDown",
    initialState: {
        showAccDropDown: false,
    },
    reducers: {
        setShowAccDropDown(state, action) {
            state.showAccDropDown = action.payload
        },
    },
})



export const { setShowAccDropDown } = acDropDownSlice.actions

export default acDropDownSlice.reducer
