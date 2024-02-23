import { configureStore } from "@reduxjs/toolkit";
import fetchReducer from "./fetch.js";
import scheduleReducer from "./schedule.js";

const store = configureStore({
  reducer: {
    fetch: fetchReducer,
    schedule: scheduleReducer,
  },
});

export default store;
