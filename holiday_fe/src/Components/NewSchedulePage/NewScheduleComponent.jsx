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
          <div className="flex flex-col gap-2 w-full">
            <div className="flex flex-row gap-2 text-center">
              <p className="w-8 text-xl">제목</p>
              <Field
                as="textarea"
                id={id}
                name={name}
                rows="1"
                className="block resize-none w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
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
