import { log } from "../log";
import backgroundImg from "../backgroundImg.jpg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useRef } from "react";

export default function MainPage() {
  const schedule = useSelector((state) => state.schedule);

  log("<MainPage /> rendered");
  const container = {
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item = {
    show: {
      opacity: 1,
      scale: [0.85, 1.05, 1],
    },
  };

  return (
    <>
      <section className="bg-gray-500 h-64 p-5">
        <div className="grid grid-cols-6 grid-rows-auto text-center auto-rows-auto">
          <div className="text-center col-start-2 col-span-4 py-24">
            <input
              type="text"
              placeholder="검색"
              className="p-5 rounded-full hover:outline-none focus:outline-none w-5/6 align-middle"
            />
          </div>
        </div>
      </section>
      <section className="xl:mx-10 max-xl:mx-5">
        <article className="mt-5 mb-8">
          <h3 className="font-bold">생성한 여행 스케줄</h3>
          <div className="w-full h-64 mt-2 overflow-x-scroll overscroll-auto">
            <motion.ul
              className="flex gap-5"
              variants={container}
              animate="show"
            >
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
            </motion.ul>
          </div>
        </article>
        <article className="mt-5 mb-8">
          <h3 className="font-bold">Articles</h3>
          <div className="w-full h-64 mt-2 overflow-x-scroll overscroll-auto">
            <motion.ul
              className="flex gap-5"
              variants={container}
              animate="show"
            >
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
              <MainScheduleComponent item={item} schedule={schedule} />
            </motion.ul>
          </div>
        </article>
      </section>
    </>
  );
}

function MainScheduleComponent({ item }) {
  const itemRef = useRef(null);

  return (
    <>
      <motion.li variants={item} ref={itemRef}>
        <Link to="schedule/:id">
          <div className="h-64 w-64">
            <img
              src={backgroundImg}
              alt="scroll example img"
              className="h-64 mr-5 rounded-md hover:rounded-3xl"
            />
          </div>
        </Link>
      </motion.li>
    </>
  );
}
