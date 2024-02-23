import { useSelector, useDispatch } from "react-redux";
import { scheduleActions } from "../Store/schedule";
import { fetchActions } from "../Store/fetch";
import NewScheduleComponent from "../Components/NewSchedulePage/NewScheduleComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const label = "일차";
const id = "day";

function calculateTravelDates(startDate, endDate) {
  // 몇박 몇일인지 계산하는 로직
  const travelDates =
    (new Date(endDate) - new Date(startDate)) / 1000 / 60 / 60 / 24 + 1;
  return travelDates;
}

export default function NewSchedulePage() {
  const { schedule } = useSelector((state) => state.schedule);
  const [imageFile, setImageFile] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function selectFileHandler(event) {
    const file = event.target.files[0];
    const fileId = event.target.id;
    const fileURL = URL.createObjectURL(file);
    setImageFile((prevImageFile) => {
      return [...prevImageFile, { image: fileURL, fileId }];
    });
  }

  const travelDates = calculateTravelDates(
    schedule.startDate,
    schedule.endDate
  );

  function createDetailSchedule() {
    let schedules = [];
    let date;
    for (date = 1; date <= travelDates; date++) {
      schedules.push(
        <NewScheduleComponent
          key={date}
          label={date + label}
          id={id + date}
          onChange={selectFileHandler}
        />
      );
    }
    return schedules;
  }

  function submitSchedule(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    let data = Object.fromEntries(fd.entries());
    data = {
      ...data,
      image: imageFile, // blob으로 이미지 대체
    };
    dispatch(scheduleActions.createSchedule(data));
    dispatch(fetchActions.postSchedule({ schedule, data }));
    dispatch(scheduleActions.setStage("INITIALIZE"));
    navigate("/");
  }

  return (
    <section className="mx-10 p-16 max-xl:p-20">
      <form onSubmit={submitSchedule}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="mt-2 col-span-5">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="schedule-name"
                    id="schedule-name"
                    autoComplete="schedule-name"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder={schedule.title}
                    disabled
                  />
                </div>
              </div>
              <div className="mt-2 col-span-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="schedule-category"
                    id="schedule-category"
                    autoComplete="schedule-category"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder={schedule.category}
                    disabled
                  />
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="schedule-place"
                    id="schedule-place"
                    autoComplete="schedule-place"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder={schedule.place}
                    disabled
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="schedule-date-start"
                    id="schedule-date-start"
                    autoComplete="schedule-date-start"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder={schedule.startDate}
                    disabled
                  />
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset">
                  <input
                    type="text"
                    name="schedule-date-end"
                    id="schedule-date-end"
                    autoComplete="schedule-date-end"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
                    placeholder={schedule.endDate}
                    disabled
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 세부일정 -> 이전 모달에서 받아온 일정대로 출력. */}
          {travelDates >= 0 && createDetailSchedule()}
          {/* ==== */}
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-make-schedule-btn px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
