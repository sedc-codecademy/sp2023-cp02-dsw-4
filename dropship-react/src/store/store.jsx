import { configureStore } from '@reduxjs/toolkit'
import acDropDownReducer from './slices/acDropDownSlice'
import themeReducer from './slices/themeSlice'
import mobileReducer from './slices/mobileSlice'
import navSettingsReducer from './slices/navSettingsSlice'

const store = configureStore({
    reducer: {
        navSettings: navSettingsReducer,
        acDropDown: acDropDownReducer,
        theme: themeReducer,
        mobile: mobileReducer
    }
})

export default store
