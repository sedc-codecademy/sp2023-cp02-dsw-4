import { createSlice } from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name: "search",
    initialState: {
        shouldFocus: false,
        searchArray: [{placeholder: 'Should be array of objects'}]
    },
    reducers: {
        setShouldFocus(state, action) {
            state.shouldFocus = action.payload
        },
        setSearchArray(state, action) {
            state.searchArray = action.payload
        },
    },
})

export const { setSearchArray, setShouldFocus } = searchSlice.actions

export default searchSlice.reducer