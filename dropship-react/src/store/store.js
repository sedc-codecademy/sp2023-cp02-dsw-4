import { configureStore } from "@reduxjs/toolkit"
import { userReducer } from "./slices/user/userSlices"
import { userSettingsReducer } from "./slices/userSettings/userSettingsSlices"
import { productsReducer } from './slices/productsSlice'
import acDropDownReducer from './slices/dropdowns/acDropDownSlice'
import themeReducer from './slices/theme/themeSlice'
import mobileReducer from './slices/mobile/mobileSlice'
import navSettingsReducer from './slices/nav/navSettingsSlice'
import catDropDownReducer from './slices/dropdowns/catDropDownSlice'
import ddBkgReducer from "./slices/dropdowns/ddBkgSlice"
import filtersReducer from "./slices/filters/filtersSlice"
import shippingReducer from "./slices/shipping/shippingSlice"
import searchReducer from "./slices/search/search"

const store = configureStore({
  reducer: {
    user: userReducer,
    userSettings: userSettingsReducer,
    product: productsReducer,
    navSettings: navSettingsReducer,
    acDropDown: acDropDownReducer,
    catDropDown: catDropDownReducer,
    shipping: shippingReducer,
    search: searchReducer,
    ddBkg: ddBkgReducer,
    theme: themeReducer,
    filters: filtersReducer,
    mobile: mobileReducer
  },
})

export default store

