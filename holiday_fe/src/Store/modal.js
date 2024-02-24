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

export const modalActions = modalSlice.actions;
export default modalSlice.reducer;
