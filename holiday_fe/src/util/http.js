// backend - schedule : http://127.0.0.1:8000/schedule
// backend - user : http://127.0.0.1:8000/user
import { QueryClient } from "@tanstack/react-query";
import { ErrorMessage } from "../Components/UI/DataIndicator";
import { render } from "react-dom";

export const queryClient = new QueryClient();

export async function fetchHandler() {
  const response = await fetch("http://127.0.0.1:8000/schedule/");

  if (!response.ok) {
    throw new Error("작성한 스케줄을 불러올 수 없습니다.");
  }

  const schedules = await response.json();

  return schedules;
}

export async function fetchScheduleDetailHandler({ id, signal }) {
  const response = await fetch("http://127.0.0.1:8000/schedule/" + id, {
    signal,
  });

  if (!response.ok) {
    throw new Error("해당 스케줄을 불러올 수 없습니다.");
  }

  const schedule = await response.json();
  console.log(schedule);
  return schedule;
}

export async function deleteScheduleHandler(id) {
  const response = await fetch("http://127.0.0.1:8000/schedule/" + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("해당 스케줄을 삭제할 수 없습니다.");
  }

  return response.status;
}

export async function createNewSchedule(scheduleFormData) {
  const response = await fetch("http://127.0.0.1:8000/schedule/", {
    method: "POST",
    body: scheduleFormData,
  });

  if (!response.ok) {
    throw new Error("스케줄을 저장하는데 실패했습니다. 다시 시도해주세요.");
  }

  const schedule = await response.json();
  console.log(schedule);
  return schedule;
}

export async function userLoginHandler(username, email, password) {
  console.log(username, email, password);
  const requestOptions = {
    method: "POST", // POST 메서드를 사용하여 로그인 요청을 보냅니다.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  };

  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/login/",
      requestOptions
    );

    if (!response.ok) {
      console.log("로그인 실패");
      return { message: "로그인 실패", code: response.status };
    }

    return { message: "로그인 성공", code: response.status };
  } catch (error) {
    console.error("로그인 요청 중 오류가 발생했습니다.", error);
    return { message: "로그인 요청 중 오류가 발생했습니다.", code: 500 };
  }
}

export async function getUserInfo() {
  const response = await fetch("http://127.0.0.1:8000/api/user/");
  if (!response.ok) {
    throw new Error("유저 데이터를 가져올 수 없습니다.");
  }
  console.log(response);
  const resData = await response.json();
  return resData;
}
