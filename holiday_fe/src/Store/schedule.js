import { createSlice } from "@reduxjs/toolkit";

const initialState = { schedule: {} };

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
      state.schedule = {
        ...state.schedule,
        category: basicInfo,
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

const categorySlice = createSlice({
  name: "category",
  initialState: { category: [] },
  reducers: {
    addCategory(state, action) {
      const category = action.payload;
      const isComma = /[,$]/.test(category);
      const newCategory = isComma ? category.split(",")[0] : category;
      state.category = [...state.category, newCategory];
    },
    removeCategory(state, action) {
      const categoryId = action.payload;
      state.category = state.category.filter((item) => item !== categoryId);
    },
  },
});

export const scheduleActions = scheduleSlice.actions;
export default scheduleSlice.reducer;
export const categoryReducer = categorySlice.reducer;
export const categoryActions = categorySlice.actions;
