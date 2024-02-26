import { createSlice } from "@reduxjs/toolkit";
// import { Map } from "@googlemaps/js-api-loader";
// import { MarkerClusterer } from "@googlemaps/markerclusterer";
const GOOGLE_API_KEY = "AIzaSyBwXhlspBZwf-kAjV6pWsx9VIxNrFdP3uk";

// fetch
export async function fetchHandler(url, option, errorMessage) {
  const response = await fetch(url, option);

  if (!response.ok) {
    throw new Error(errorMessage);
  }
  const resData = await response.json();

  return resData;
}

// 구글 장소 API
export async function placeAPIHandler(place) {
  const response = await fetch(
    `https://places.googleapis.com/v1/places/GyuEmsRBfy61i59si0?fields=addressComponents&key=${GOOGLE_API_KEY}`
  );

  if (!response.ok) {
    throw new Error("");
  }
}

// 이전
const fetchSlice = createSlice({
  name: "fetch",
  initialState: {
    data: {},
    status: "pending",
    title: "전송 중...",
    message: "여행 스케줄을 저장 중입니다!",
  },
  reducers: {
    postSchedule(state, action) {
      const scheduleInfo = action.payload.schedule;
      const scheduleData = action.payload.data;
      state.data = { info: scheduleInfo, data: scheduleData };
      console.log(JSON.stringify(state.data));

      const option = { method: "POST", body: JSON.stringify(state.data) };

      //   try {
      //     const data = fetchHandler(
      //       "url",
      //       option,
      //       "여행 스케줄을 저장하는데 실패했습니다. 다시 시도해주세요."
      //     );
      //     console.log(data);
      //   } catch (err) {
      //     console.log(err);
      //   }
    },
    getSchedule(state, action) {
      const option = { method: "GET" };
      //   try {
      //     const data = fetchHandler(
      //       "url",
      //       option,
      //       "여행 스케줄을 불러오는데 실패했습니다. 다시 시도해주세요."
      //     ); // get
      //     console.log(data);
      //   } catch (err) {
      //     console.log(err);
      //   }
    },
  },
});

export const fetchActions = fetchSlice.actions;
export default fetchSlice.reducer;
