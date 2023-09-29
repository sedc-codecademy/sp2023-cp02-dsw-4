import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user/userSlices";
import { userSettingsReducer } from "./slices/userSettings/userSettingsSlices";
import { productsReducer } from './slices/productsSlice'
import acDropDownReducer from './slices/acDropDownSlice'
import themeReducer from './slices/themeSlice'
import mobileReducer from './slices/mobileSlice'
import navSettingsReducer from './slices/navSettingsSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    userSettings: userSettingsReducer,
    product: productsReducer,
    navSettings: navSettingsReducer,
    acDropDown: acDropDownReducer,
    theme: themeReducer,
    mobile: mobileReducer
  },
})

export default store

