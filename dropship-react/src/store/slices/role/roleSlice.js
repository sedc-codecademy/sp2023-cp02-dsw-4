import { createSlice } from "@reduxjs/toolkit"

const roleSlice = createSlice({
    name: "role",
    initialState: {
        role: 'user',
        authTokens: JSON.parse(localStorage.getItem("tokens")) || null,
    },
    reducers: {
        setRole(state, action) {
            state.role = action.payload
        },

        setAuthTokens(state, action) {
            state.authTokens = action.payload
            localStorage.setItem("tokens", JSON.stringify(action.payload))
        },

        clearTokens(state) {
            localStorage.removeItem("tokens")
            state.authTokens = null
        }
    },
})

export const { setRole, setAuthTokens, clearTokens } = roleSlice.actions

export default roleSlice.reducer