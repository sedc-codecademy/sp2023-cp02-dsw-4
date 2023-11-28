import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    postalCode: "",
    city: "",
    image: "",
  },

  passwordInfo: {
    password: "",
    orignalPassword: "",
    cpassword: ""
  },
}

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState: initialState,

  reducers: {
    updateUserInfo(state, action) {
      const { name, value } = action.payload
      state.userInfo[name] = value
    },
    updatePasswordInfo(state, action) {
      const { name, value } = action.payload
      state.passwordInfo[name] = value
    },
    clearUser: (state) => {
      Object.keys(state.userInfo).forEach(key => {
        state.userInfo[key] = ''
      })
    },
    clearPasswordInfo: (state) => {
      Object.keys(state.passwordInfo).forEach(key => {
        state.passwordInfo[key] = ''
      })
    }
  },
})

export const { clearUser,clearPasswordInfo, updateUserInfo, updatePasswordInfo, updateAddressInfo } = userSettingsSlice.actions

export const userSettingsReducer = userSettingsSlice.reducer