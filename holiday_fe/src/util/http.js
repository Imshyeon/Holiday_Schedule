// backend - schedule : http://127.0.0.1:8000/schedule
// backend - user : http://127.0.0.1:8000/user

export async function fetchHandler() {
  const response = await fetch("http://127.0.0.1:8000/schedule/");

  if (!response.ok) {
    throw new Error("작성한 스케줄을 불러올 수 없습니다.");
  }

  const schedules = await response.json();

  return schedules;
}
