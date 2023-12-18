import { createSlice } from "@reduxjs/toolkit"

const roleSlice = createSlice({
    name: "role",
    initialState: {
        role: 'User',
        authTokens: localStorage.getItem("tokens") ? JSON.parse(localStorage.getItem("tokens")) : null,
        userid: localStorage.getItem("userid") ? JSON.parse(localStorage.getItem("userid")) : ''
    },
    reducers: {
        setRole(state, action) {
            state.role = action.payload
        },

        setUserId(state, action) {
            state.userid = action.payload
            localStorage.setItem("userid", JSON.stringify(action.payload))
        },

        setAuthTokens(state, action) {
            state.authTokens = action.payload
            localStorage.setItem("tokens", JSON.stringify(action.payload))
        },

        clearTokens(state) {
            localStorage.removeItem("tokens")
            localStorage.removeItem("userid")
            state.authTokens = null
            state.userid = ''
        }
    },
})

export const { setRole, setAuthTokens, setUserId, clearTokens } = roleSlice.actions

export default roleSlice.reducer