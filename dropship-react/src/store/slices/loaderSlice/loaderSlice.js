import { createSlice } from "@reduxjs/toolkit"

const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        showLoading: true,
        isFetching: false,
        isError: false,
    },
    reducers: {
        setShowLoading(state, action) {
            state.showLoading = action.payload
        },
        setIsFetching(state, action) {
            state.isFetching = action.payload
        },
        setIsError(state, action) {
            state.isError = action.payload
        },
    },
})

export const { setShowLoading, setIsFetching, setIsError } = loaderSlice.actions

export default loaderSlice.reducer