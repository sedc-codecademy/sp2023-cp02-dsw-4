import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userImage: "",

  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    
  },

  passwordInfo: {
    password: "",
  },

  addressInfo: {
    address: "",
    postalCode: "",
    city: "",
  },

  cardInfo: {
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    securityCode: "",
    cardType: "",
    cardStatus: "",
  }
};

export const userSettingsSlice = createSlice({
  name: "userSettings",
  initialState: initialState,

  reducers: {
    updateUserImage (state, action) {
      const { name, value } = action.payload;
      state.userImage[name] = value
    },
    
    updateUserInfo (state, action) {
      // state.userInfo = action.payload

      const { name, value } = action.payload;
      state.userInfo[name] = value
    },

    updatePasswordInfo (state, action) {
      const { name, value } = action.payload;
      state.passwordInfo[name] = value
    },

    updateAddressInfo (state, action) {
      const { name, value } = action.payload;
      state.addressInfo[name] = value
    },

    updateCardInfo (state, action) {
      const { name, value } = action.payload;
      state.cardInfo[name] = value
    }
  },
});

export const { updateUserImage, updateUserInfo, updatePasswordInfo, updateAddressInfo, updateCardInfo } = userSettingsSlice.actions;

export const userSettingsReducer = userSettingsSlice.reducer