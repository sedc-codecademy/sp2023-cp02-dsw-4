import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user/userSlices";
import { userSettingsReducer } from "./slices/userSettings/userSettingsSlices";
import { productsReducer } from './slices/productsSlice'
import acDropDownReducer from './slices/acDropDownSlice'
import themeReducer from './slices/themeSlice'
import mobileReducer from './slices/mobileSlice'
import navSettingsReducer from './slices/navSettingsSlice'
import catDropDownReducer from './slices/catDropDownSlice'
import ddBkgReducer from "./slices/ddBkgSlice";
import filtersReducer from "./slices/filters/filtersSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    userSettings: userSettingsReducer,
    product: productsReducer,
    navSettings: navSettingsReducer,
    acDropDown: acDropDownReducer,
    catDropDown: catDropDownReducer,
    ddBkg: ddBkgReducer,
    theme: themeReducer,
    filters: filtersReducer,
    mobile: mobileReducer
  },
})

export default store

