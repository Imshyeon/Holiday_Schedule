import { createSlice } from "@reduxjs/toolkit";

const userSlices = createSlice({
  name: "user",
  initialState: {
    user: {
      username: null,
      email: null,
      userInfo: null,
    },
    edit: false,
  },
  reducers: {
    setEdit(state) {
      state.edit = !state.edit;
    },
    userProfileInformation(state, action) {
      const basicInfo = action.payload;
      state.user = {
        ...state.user,
        username: basicInfo.username,
        email: basicInfo.email,
        userInfo: basicInfo.userInfo,
      };
    },
    userSchedule(state, action) {
      const SCHEDULE_ACTION = action.payload;
      console.log(SCHEDULE_ACTION);
    },
    userProfileImage(state, action) {
      const image = action.payload;
      state.user = {
        image,
      };
    },
    getUserInfoFromBackEnd(state, action) {
      const userInfo = action.payload;
      console.log(userInfo);
      state.user = {
        username: userInfo.username,
        email: userInfo.email,
      };
    },
  },
});

export const userActions = userSlices.actions;
export default userSlices.reducer;
