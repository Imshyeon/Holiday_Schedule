import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { schedule: {}, scheduleStage: 0 };

const scheduleSlice = createSlice({
  name: "new-schedule",
  initialState: initialState,
  reducers: {
    setStage(state) {
      state.scheduleStage++;
    },
    createBasicInfo_1(state, action) {
      const basicInfo = action.payload;
      state.schedule = {
        title: basicInfo.title,
        category: basicInfo.category,
      };
    },
    createBasicInfo_2(state, action) {
      const basicInfo = action.payload;
      state.schedule = {
        ...state.schedule,
        place: basicInfo.place,
        startDate: basicInfo.startDate,
        endDate: basicInfo.endDate,
      };
    },
  },
});

const store = configureStore({
  reducer: {
    schedule: scheduleSlice.reducer,
  },
});

export const scheduleActions = scheduleSlice.actions;
export default store;
