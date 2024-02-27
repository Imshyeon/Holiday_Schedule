import { createPortal } from "react-dom";
import { useRef, useEffect } from "react";
import { log } from "../../log";
import { motion } from "framer-motion";
import Input from "./Input";

export default function Modal({ open, onClose, onSubmit, step }) {
  log("<Modal /> rendered");

  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;
    if (open) {
      modal.showModal();
    }

    return () => modal.close();
  }, [open]);

  let actions = (
    <menu className="mt-5 self-end flex flex-row gap-5">
      <button
        type="button"
        onClick={onClose}
        tabIndex="-1"
        className="focus:outline-none hover:text-gray-700"
      >
        취소
      </button>
      <button
        className="bg-gray-50 px-4 py-1 rounded-lg focus:outline-none hover:bg-gray-100"
        tabIndex="-1"
      >
        계속
      </button>
    </menu>
  );

  return createPortal(
    <motion.dialog
      ref={dialog}
      onClose={onClose}
      className="backdrop:bg-stone-900/80 bg-gray-200/90 rounded-xl focus:outline-none"
    >
      <form
        method="dialog"
        onSubmit={onSubmit}
        className="w-full h-fit p-10 flex flex-col justify-center align-middle items-center focus:outline-none"
      >
        {step === "first" && (
          <>
            <Input label="제목" id="title" />
            <Input label="카테고리" id="category" />
          </>
        )}
        {step === "second" && (
          <>
            <Input label="여행 장소" id="place" />
            <div className="flex flex-row gap-4 w-full">
              <Input label="일정 시작일" id="startDate" type="date" />
              <Input label="일정 종료일" id="endDate" type="date" />
            </div>
          </>
        )}
        {actions}
      </form>
    </motion.dialog>,
    document.getElementById("modal")
  );
}
