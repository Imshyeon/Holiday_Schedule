import imagePlus from "../../svg/image-plus.svg";
import circlePlus from "../../svg/circle-plus.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailScheduleActions } from "../../Store/schedule";

export default function NewScheduleComponent({ label, id, onChange }) {
  const [plusSchedule, setPlusSchedule] = useState([]);
  const dispatch = useDispatch();
  const detailSchedule = useSelector((state) => state.detailSchedule);

  function plusScheduleHandler(event, id) {
    event.preventDefault();
    const schedule = (
      <textarea
        id={id}
        name={id}
        key={id + `-${plusSchedule.length}`}
        rows="5"
        className="block resize-none w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6 mt-2"
      />
    );
    setPlusSchedule((prevSchedule) => [...prevSchedule, schedule]);
  }

  console.log(plusSchedule, detailSchedule);
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <div className="col-span-full">
        <label
          htmlFor={id}
          className="block text-md font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2 bg-gray-100 rounded-xl p-5 flex flex-col items-center">
          <input
            type="file"
            id={id}
            name="image"
            onChange={onChange}
            accept="image/*"
            className="mb-2"
          />
          {plusSchedule}
          <motion.button
            type="button"
            className="w-2/3 bg-white rounded-xl p-2 m-2 flex justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={(event) => plusScheduleHandler(event, id)}
          >
            <img src={circlePlus} alt="circle-plus" className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
