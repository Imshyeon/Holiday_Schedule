import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./schedule.js";
import toggleBtnReducer from "./sidebarToggle.js";
import modalReducer, { profileReducers } from "./modal.js";
import { categoryReducer } from "./schedule.js";
import userReducers from "./user.js";

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    toggle: toggleBtnReducer,
    modal: modalReducer,
    category: categoryReducer,
    profile: profileReducers,
    user: userReducers,
  },
});

export default store;
