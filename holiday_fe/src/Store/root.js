import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetch.js";
import scheduleReducer from "./schedule.js";
import toggleBtnReducer from "./sidebarToggle.js";
import modalReducer from "./modal.js";

const store = configureStore({
  reducer: {
    fetch: fetchReducer,
    schedule: scheduleReducer,
    toggle: toggleBtnReducer,
    modal: modalReducer,
  },
});

export default store;
