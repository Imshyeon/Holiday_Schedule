import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

const DetailScheduleModal = forwardRef(function DetailScheduleModal(
  { title, scheduleTitle, onDelete, deleteText },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/80 bg-gray-200/90 rounded-xl focus:outline-none w-1/3 h-1/3 p-10"
    >
      <div className="h-full flex flex-col justify-between items-center text-center">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-xl font-semibold">{scheduleTitle}</p>
        <form method="dialog" className=" self-end flex gap-4 justify-end">
          <motion.button
            tabIndex="-1"
            className="focus:outline-none hover:text-gray-700"
          >
            닫기
          </motion.button>
          <motion.button
            className="bg-gray-50 px-4 py-1 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-red-400"
            tabIndex="-1"
            whileHover={{ scale: 1.1 }}
            onClick={onDelete}
          >
            {deleteText}
          </motion.button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal")
  );
});

export default DetailScheduleModal;
