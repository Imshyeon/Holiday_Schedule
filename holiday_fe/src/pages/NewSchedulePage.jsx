import { useSelector, useDispatch } from "react-redux";
import { scheduleActions } from "../Store/schedule";
// import { fetchActions } from "../utils/fetch";
import NewScheduleComponent from "../Components/NewSchedulePage/NewScheduleComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { modalActions } from "../Store/modal";

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
    setImageFile((prevImage) => [...prevImage, { image: fileURL, fileId }]);
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
    console.log(event.target);
    const fd = new FormData(event.target);
    let data = Object.fromEntries(fd.entries());
    data = {
      ...data,
      image: imageFile, // blob으로 이미지 대체
    };
    console.log(data);
    dispatch(scheduleActions.createSchedule(data));
    dispatch(scheduleActions.setStage("INITIALIZE"));
    navigate("/");
  }

  function closeNewPage() {
    dispatch(modalActions.openSecondModal());
    dispatch(scheduleActions.setStage("STAGE_MINUS"));
    navigate("/");
  }

  return (
    <section className="h-fit p-16 max-xl:p-20">
      <form onSubmit={submitSchedule}>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-8">
            <article className="basic-schedule-info">
              <div className="title flex flex-row justify-between items-center">
                <h1 className="text-3xl font-extrabold">{schedule.title}</h1>
              </div>
              <div className="sub-title flex flex-row justify-start gap-2">
                {schedule.category.map((category) => {
                  return (
                    <button
                      key={category}
                      className="bg-gray-100 rounded-full px-3 py-1 mt-2"
                      disabled
                    >
                      {category}
                    </button>
                  );
                })}
                <button
                  key="place"
                  className="bg-gray-100 rounded-full px-3 py-1 mt-2"
                  disabled
                >
                  {schedule.place}
                </button>
                <button
                  key="date"
                  className="bg-gray-100 rounded-full px-3 py-1 mt-2"
                  disabled
                >
                  {schedule.startDate} ~ {schedule.endDate}
                </button>
              </div>
            </article>
          </div>
          {/* 세부일정 -> 이전 모달에서 받아온 일정대로 출력. */}
          {travelDates >= 0 && createDetailSchedule()}
          {/* ==== */}
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={closeNewPage}
            className="text-sm font-semibold leading-6 text-gray-700 hover:text-gray-900"
          >
            이전
          </button>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-md bg-make-schedule-btn px-3 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            저장
          </motion.button>
        </div>
      </form>
    </section>
  );
}
