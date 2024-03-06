// backend - schedule : http://127.0.0.1:8000/schedule
// backend - user : http://127.0.0.1:8000/user
import { QueryClient } from "@tanstack/react-query";

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

export async function deleteScheduleHandler({ id }) {
  const response = await fetch("http://127.0.0.1:8000/schedule/" + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("해당 스케줄을 삭제할 수 없습니다.");
  }

  return response.json();
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
