import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
export function Loading({ text }) {
  // 로딩바
  return (
    <p className="flex justify-center gap-2 items-center text-center text-[#7db0a5]">
      <motion.svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#EDF2F1"
        className="h-10 w-10 justify-center items-center"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
            stroke="#CCE8E5"
            strokeWidth="3.55556"
            strokeLinecap="round"
          ></path>
        </g>
      </motion.svg>
      {text}
    </p>
  );
}

export function ErrorMessage({ error, message }) {
  const [X, setX] = useState(false);
  function clickXHandler() {
    console.log("X");
    setX(true);
  }

  let content;
  if (!X) {
    content = (
      <div className="xl:mt-10 max-xl:mt-14 h-10 bg-red-500 flex justify-between items-center">
        <p className="text-white ml-4">{error ? error.message : message}</p>
        <button onClick={clickXHandler}>
          <FontAwesomeIcon icon={faX} className="text-white mr-4" />
        </button>
      </div>
    );
  }

  if (X) {
    content = null;
  }
  return <div>{content}</div>;
}
