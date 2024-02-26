import { configureStore } from "@reduxjs/toolkit";
import scheduleReducer from "./schedule.js";
import toggleBtnReducer from "./sidebarToggle.js";
import modalReducer from "./modal.js";
import { categoryReducer } from "./schedule.js";

const store = configureStore({
  reducer: {
    schedule: scheduleReducer,
    toggle: toggleBtnReducer,
    modal: modalReducer,
    category: categoryReducer,
  },
});

export default store;
