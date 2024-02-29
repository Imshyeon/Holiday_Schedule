import locationPlus from "../../svg/location-plus.svg";
import url from "../../svg/url.svg";
import imagePlus from "../../svg/image-plus.svg";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

export default function NewScheduleComponent({ label, id, onChange }) {
  const { schedule } = useSelector((state) => state.schedule);
  function clickUrlHandler(event) {
    event.preventDefault();
    console.log("url");
  }
  function clickLocationHandler(event) {
    event.preventDefault();
    console.log("location");
  }
  console.log(schedule);
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <div className="col-span-full">
        <label
          htmlFor={id}
          className="block text-md font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2 bg-gray-100 rounded-xl p-5 flex flex-col">
          <div className="w-fit flex flex-row gap-2 justify-center mb-2">
            {/* 이미지 */}
            <motion.label
              htmlFor={id}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [0.8, 1] }}
            >
              <img
                src={imagePlus}
                alt="add-img"
                className="w-8 h-8 cursor-pointer"
              />
            </motion.label>
            <input
              type="file"
              id={id}
              name="image"
              onChange={onChange}
              accept="image/*"
              className="mb-2 hidden"
              multiple
            />
            {/* 위치 정보 */}
            <motion.button
              type="button"
              onClick={clickLocationHandler}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [0.8, 1] }}
            >
              <img src={locationPlus} alt="add-location" className="w-8 h-8" />
            </motion.button>
            {/* url */}
            <motion.button
              type="button"
              onClick={clickUrlHandler}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: [0.8, 1] }}
            >
              <img src={url} alt="add-url" className="w-7 h-7" />
            </motion.button>
          </div>
          <div className="flex flex-row gap-2 w-full">
            <textarea
              id={id}
              name={id}
              rows="5"
              className="block resize-none w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
