import { useSelector, useDispatch } from "react-redux";
import { scheduleActions } from "../Store/schedule";
import NewScheduleComponent from "../Components/NewSchedulePage/NewScheduleComponent";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { modalActions } from "../Store/modal";
import imagePlus from "../svg/image-plus.svg";

import { useMutation } from "@tanstack/react-query";
import { createNewSchedule, queryClient } from "../util/http";

import { Formik, Form, FieldArray } from "formik";
import { ErrorMessage } from "../Components/UI/DataIndicator";

const label = "일차";
const id = "day";

const initialValues = {
  content: [{ content: "", url: "", location: "" }],
};

function calculateTravelDates(startDate, endDate) {
  // 몇박 몇일인지 계산하는 로직
  const travelDates =
    (new Date(endDate) - new Date(startDate)) / 1000 / 60 / 60 / 24 + 1;
  return travelDates;
}

export default function NewSchedulePage() {
  const { schedule } = useSelector((state) => state.schedule);
  const [images, setImages] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { mutate, isError, error, isPending } = useMutation({
    mutationFn: createNewSchedule,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["schedules"],
      });
      navigate("/");
    },
  });

  const travelDates = calculateTravelDates(
    schedule.startDate,
    schedule.endDate
  );

  function handleImageChange(event) {
    const files = Array.from(event.target.files);
    console.log(files[0].name, files[0]);
    setImages(files[0]);
  }

  function createDetailSchedule() {
    let schedules = [];
    let date;
    for (date = 1; date <= travelDates; date++) {
      schedules.push(
        <NewScheduleComponent
          key={date}
          label={date + label}
          id={id + date}
          name={`content[${date - 1}].content`}
        />
      );
    }
    return schedules;
  }

  function submitSchedule(values) {
    const { content } = values;
    const data = { ...schedule, content, cover_image: images };

    const scheduleFormData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      console.log(key, value);
      if (key === "content" || key === "category") {
        scheduleFormData.append(key, JSON.stringify(value));
      } else {
        scheduleFormData.append(key, value);
      }
    }
    mutate(scheduleFormData);
    dispatch(scheduleActions.setStage("INITIALIZE"));
    navigate("/");
  }

  function closeNewPage() {
    dispatch(modalActions.openSecondModal());
    dispatch(scheduleActions.setStage("STAGE_MINUS"));
    navigate("/");
  }

  return (
    <>
      {isError && <ErrorMessage error={error} />}
      <section className="h-fit p-16 max-xl:p-20">
        <Formik onSubmit={submitSchedule} initialValues={initialValues}>
          <Form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-8">
                <article className="basic-schedule-info">
                  <div className="title flex flex-row justify-between items-center">
                    <h1 className="text-3xl font-extrabold">
                      {schedule.title}
                    </h1>
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
              {/* 이미지 */}
              <motion.label
                htmlFor={id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: [0.8, 1] }}
              >
                <img
                  src={imagePlus}
                  alt="add-img"
                  className="w-8 h-8 cursor-pointer mt-5"
                />
              </motion.label>
              <input
                type="file"
                id={id}
                name="cover_image"
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                multiple
              />
              <FieldArray name="content">
                {({ push, remove }) =>
                  travelDates >= 0 && createDetailSchedule()
                }
              </FieldArray>
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
          </Form>
        </Formik>
      </section>
    </>
  );
}
