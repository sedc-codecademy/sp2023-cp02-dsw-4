import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user/userSlices";
import { userSettingsReducer } from "./slices/userSettings/userSettingsSlices";
import { productsReducer } from './slices/productsSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    userSettings: userSettingsReducer,
    product:productsReducer
  },
});

export default store;
