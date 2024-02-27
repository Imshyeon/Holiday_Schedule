import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: { step: "none" },
  reducers: {
    openFirstModal(state) {
      state.step = "first";
    },
    openSecondModal(state) {
      state.step = "second";
    },
    closeFirstModal(state) {
      state.step = "close";
    },
    closeSecondModal(state) {
      state.step = "close";
    },
  },
});

const profileSlice = createSlice({
  name: "profile",
  initialState: { openProfile: false },
  reducers: {
    clickProfile(state, actions) {
      const isOpen = actions.payload;
      state.openProfile = isOpen;
    },
  },
});

export const profileActions = profileSlice.actions;
export const profileReducers = profileSlice.reducer;
export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
