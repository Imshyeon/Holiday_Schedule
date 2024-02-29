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
        state.schedule = {};
      } else if (type === "STAGE_PLUS") {
        state.scheduleStage++;
      } else if (type === "STAGE_MINUS") {
        state.scheduleStage--;
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
      console.log(detailSchedule);
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
    removeAllCategories(state) {
      state.category = [];
    },
  },
});

export const scheduleActions = scheduleSlice.actions;
export default scheduleSlice.reducer;
export const categoryReducer = categorySlice.reducer;
export const categoryActions = categorySlice.actions;
