import backgroundImg from "../backgroundImg.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchHandler } from "../util/http";

import { Loading, ErrorMessage } from "../Components/UI/DataIndicator";

export default function MainPage() {
  // Framer Motioin
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

  // TanStack Query
  let content;

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["schedules"],
    queryFn: fetchHandler,
  });

  if (isPending) {
    content = <Loading text="데이터를 불러오는 중입니다..." />;
  }

  if (isError) {
    content = <p className="text-red-400">{error.message}</p>;
  }

  if (data && data.length > 0) {
    content = (
      <article className="mt-5 mb-8">
        <h3 className="font-bold">생성한 여행 스케줄</h3>
        <div className="w-full h-72 mt-2 overflow-x-scroll overscroll-auto flex items-center">
          <motion.ul className="flex gap-5" variants={container} animate="show">
            {data.map((schedule) => {
              return (
                <MainScheduleComponent
                  key={schedule.id}
                  item={item}
                  link={`schedule/${schedule.id}`}
                  name={schedule.title}
                  coverImage={schedule["cover_image"]}
                />
              );
            })}
          </motion.ul>
        </div>
      </article>
    );
  }

  return (
    <>
      {/* <section className="bg-gray-500 h-64 p-5">
        <div className="grid grid-cols-6 grid-rows-auto text-center auto-rows-auto">
          <div className="text-center col-start-2 col-span-4 py-24">
            <input
              type="text"
              placeholder="검색"
              className="p-5 rounded-full hover:outline-none focus:outline-none w-5/6 align-middle"
            />
          </div>
        </div>
      </section> */}
      {isError && <ErrorMessage error={error} />}
      <section
        className={
          isError ? "mt-10 xl:mx-10 max-xl:mx-5" : "mt-24 xl:mx-10 max-xl:mx-5"
        }
      >
        {/* <article className="mt-5 mb-8">
          <h3 className="font-bold">생성한 여행 스케줄</h3>
          <div className="w-full h-72 mt-2 overflow-x-scroll overscroll-auto flex items-center">
            {content}
          </div>
        </article> */}
        {content}
        <article className="mt-5 mb-8">
          <h3 className="font-bold">Articles</h3>
          <div className="w-full h-72 mt-2 overflow-x-scroll overscroll-auto flex items-center">
            <motion.ul
              className="flex gap-5"
              variants={container}
              animate="show"
            >
              <MainScheduleComponent item={item} link={"article/:id"} />
              <MainScheduleComponent item={item} link={"article/:id"} />
              <MainScheduleComponent item={item} link={"article/:id"} />
              <MainScheduleComponent item={item} link={"article/:id"} />
              <MainScheduleComponent item={item} link={"article/:id"} />
              <MainScheduleComponent item={item} link={"article/:id"} />
              <MainScheduleComponent item={item} link={"article/:id"} />
            </motion.ul>
          </div>
        </article>
      </section>
    </>
  );
}

function MainScheduleComponent({ item, coverImage, name, link }) {
  const itemRef = useRef(null);

  return (
    <>
      <motion.li
        variants={item}
        ref={itemRef}
        whileTap={{ scale: [0.8, 1] }}
        id=":id"
      >
        <Link to={link}>
          <div className="h-64 w-64">
            <motion.figure whileHover={{ borderRadius: "20%", y: -10 }}>
              <img
                src={coverImage || backgroundImg}
                alt={name}
                className="h-60 mr-5 rounded-md "
              />
              <figcaption className="text-center mt-1">{name}</figcaption>
            </motion.figure>
          </div>
        </Link>
      </motion.li>
    </>
  );
}
