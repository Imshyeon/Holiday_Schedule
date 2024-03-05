import locationPlus from "../../svg/location-plus.svg";
import url from "../../svg/url.svg";
import { motion } from "framer-motion";
import { Field } from "formik";

export default function NewScheduleComponent({ label, id, name }) {
  function clickUrlHandler(event) {
    event.preventDefault();
    console.log("url");
  }

  function clickLocationHandler(event) {
    event.preventDefault();
    console.log("location");
  }

  return (
    <div className="border-b border-gray-900/10 pb-12">
      <div className="col-span-full">
        <label className="block text-md font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2 bg-gray-100 rounded-xl p-5 flex flex-col">
          <div className="w-fit flex flex-row gap-2 justify-center mb-2">
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
            <Field
              as="textarea"
              id={id}
              name={name}
              rows="5"
              className="block resize-none w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
