import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/user/userSlices";
import { userSettingsReducer } from "./slices/userSettings/userSettingsSlices";

const store = configureStore({
  reducer: {
    user: userReducer,
    userSettings: userSettingsReducer,
  },
});

export default store;
