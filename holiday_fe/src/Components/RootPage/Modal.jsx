import { createPortal } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { log } from "../../log";
import { motion } from "framer-motion";
import CategoryComponent from "../UI/CategoryComponent";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../Store/schedule";

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

function Input({ label, id, type = "text" }) {
  const [categories, setCategory] = useState([]);
  const dispatch = useDispatch();
  let classes = `focus:outline-none rounded-xl p-3 border-b border-gray-500/40 focus:shadow-md`;

  let classWidth = "w-[500px]";
  if (type === "date") {
    classWidth = "w-full";
  }

  function setCategories(event) {
    if (
      id === "category" &&
      (event.code === "Comma" ||
        event.code === "Tab" ||
        event.code === "Space" ||
        event.type === "blur") &&
      event.target.value.trim() !== ""
    ) {
      event.preventDefault();
      let inputValue = event.target.value;
      inputValue = inputValue.trim();
      setCategory((prevCategory) => [...prevCategory, inputValue.split(",")]);
      dispatch(categoryActions.addCategory(inputValue.trim()));
      event.target.value = "";
    }
  } // 처음에 onKeyDown으로 했을 때, 키 입력이 버벅임 + 제대로 input이 초기화되지 않는 문제 발생 -> onKeyUp으로 해결

  return (
    <div className={`flex flex-col gap-1 my-4 ${classWidth}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        className={classes}
        onKeyUp={id === "category" ? setCategories : null}
        onBlur={id === "category" ? setCategories : null}
      />
      {categories.length >= 1 ? (
        <CategoryComponent categories={categories} />
      ) : null}
    </div>
  );
}
