import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userCards: [],
    userInfo: null,
    isLoggedIn: false,
  },
  reducers: {
    userLogIn: (state) => {
      state.isLoggedIn = true
    },

    userLogOut: (state) => {
      state.isLoggedIn = false
      state.userInfo = null
      state.userCards = []
    },

    setUserCards: (state, action) => {
      state.userCards = action.payload
    },

    setUserInfo: (state, action) => {
      state.userInfo = action.payload
    },
  },
})

export const { userLogIn, userLogOut, setUserInfo, setUserCards } = userSlice.actions

export const userReducer = userSlice.reducer
