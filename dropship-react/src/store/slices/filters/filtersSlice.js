import { createSlice } from "@reduxjs/toolkit"

const filtersSlice = createSlice({
    name: "ddBkg",
    initialState: {
        mobileFiltersOn: false,
    },
    reducers: {
        setMobileFiltersOn(state, action) {
            state.mobileFiltersOn = action.payload
        },
    },
})

export const { setMobileFiltersOn } = filtersSlice.actions

export default filtersSlice.reducer