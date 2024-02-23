import { createPortal } from "react-dom";
import { useImperativeHandle, useRef, forwardRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { scheduleActions } from "../../Store/schedule";
import { log } from "../../log";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Modal = forwardRef(function Modal({ onClose }, ref) {
  log("<Modal /> rendered");
  const schedule = useSelector((state) => state.schedule);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
      close() {
        dialog.current.close();
      },
    };
  });

  function submitHandler(event) {
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (schedule.scheduleStage === 0) {
      dispatch(scheduleActions.createBasicInfo_1(data));
    } else if (schedule.scheduleStage === 1) {
      dispatch(scheduleActions.createBasicInfo_2(data));
    }
    dispatch(scheduleActions.setStage());
    event.target.reset();
  }

  return createPortal(
    <motion.dialog
      ref={dialog}
      onClose={onClose}
      className="backdrop:bg-stone-900/80 bg-gray-200/90 rounded-xl"
    >
      <form
        method="dialog"
        onSubmit={submitHandler}
        className="w-full h-fit p-10 flex flex-col justify-center align-middle items-center focus:outline-none"
      >
        {schedule.scheduleStage === 0 && (
          <>
            <Input label="제목" id="title" />
            <Input label="카테고리" id="category" />
          </>
        )}
        {schedule.scheduleStage === 1 && (
          <>
            <Input label="여행 장소" id="place" />
            <div className="flex flex-row gap-4 w-full">
              <Input label="일정 시작일" id="startDate" type="date" />
              <Input label="일정 종료일" id="endDate" type="date" />
            </div>
          </>
        )}

        <menu className="mt-5 self-end flex flex-row gap-5">
          <button
            type="button"
            onClick={onClose}
            className="focus:outline-none hover:text-gray-700"
          >
            취소
          </button>
          <button
            type="submit"
            className="bg-gray-50 px-4 py-1 rounded-lg hover:bg-gray-100"
            onClick={() => {
              if (schedule.scheduleStage === 1) {
                navigate("/new");
              }
            }}
          >
            계속
          </button>
        </menu>
      </form>
    </motion.dialog>,
    document.getElementById("modal")
  );
});

function Input({ label, id, type = "text" }) {
  let classes = `focus:outline-none rounded-xl p-3 border-b border-gray-500/40 focus:shadow-md`;

  let classWidth = "w-[500px]";
  if (type === "date") {
    classWidth = "w-full";
  }
  return (
    <div className={`flex flex-col gap-1 my-4 ${classWidth}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} className={classes} />
    </div>
  );
}

export default Modal;
