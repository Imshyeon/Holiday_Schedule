import { createSlice } from "@reduxjs/toolkit";

const toggleBtnSlice = createSlice({
  name: "sidebar-toggle-btn",
  initialState: { toggle: false },
  reducers: {
    toggleBtn(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const toggleBtnActions = toggleBtnSlice.actions;
export default toggleBtnSlice.reducer;
