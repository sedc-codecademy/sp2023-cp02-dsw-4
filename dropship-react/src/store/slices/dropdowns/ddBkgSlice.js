import { createSlice } from "@reduxjs/toolkit"

const ddBkgSlice = createSlice({
    name: "ddBkg",
    initialState: {
        isDDOn: false,
        isScrollOn: false
    },
    reducers: {
        setIsDDOn(state, action) {
            state.isDDOn = action.payload
        },
        setIsScrollOn(state, action) {
            state.isScrollOn = action.payload
        },
    },
})

export const { setIsDDOn, setIsScrollOn } = ddBkgSlice.actions

export default ddBkgSlice.reducer