import { createSlice } from "@reduxjs/toolkit";

const initialState = { schedule: {}, scheduleStage: 0 };

const scheduleSlice = createSlice({
  name: "new-schedule",
  initialState: initialState,
  reducers: {
    setStage(state, action) {
      const type = action.payload;
      if (type === "INITIALIZE") {
        state.scheduleStage = 0;
      } else {
        state.scheduleStage++;
      }
    },
    createBasicInfo_Title(state, action) {
      const basicInfo = action.payload;
      state.schedule = {
        title: basicInfo.title,
      };
    },
    createBasicInfo_Category(state, action) {
      const basicInfo = action.payload;
      const category = basicInfo.category.split(",");
      state.schedule = {
        ...state.schedule,
        category,
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
    createSchedule(state, action) {
      const detailSchedule = action.payload;
      state.schedule = {
        ...state.schedule,
        ...detailSchedule,
      };
    },
  },
});

export const scheduleActions = scheduleSlice.actions;
export default scheduleSlice.reducer;
