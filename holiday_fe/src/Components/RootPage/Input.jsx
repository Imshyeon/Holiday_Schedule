import CategoryComponent from "../UI/CategoryComponent";
import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../Store/schedule";
import { useState } from "react";

export default function Input({ label, id, type = "text", placeholder }) {
  const [categories, setCategory] = useState([]);
  const { schedule } = useSelector((state) => state.schedule);
  const { step } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  let classes = `focus:outline-none rounded-xl p-3 border-b border-gray-500/40 focus:shadow-md`;

  let classWidth = "w-[500px]";
  if (type === "date") {
    classWidth = "w-full";
  }

  let value = undefined;
  if (step === "first" && id === "title" && schedule.title !== undefined) {
    value = schedule.title;
  } else if (
    step === "first" &&
    id === "category" &&
    schedule.category !== undefined
  ) {
    value = <CategoryComponent categories={schedule.category} />;
  } else if (
    step === "second" &&
    id === "place" &&
    schedule.place !== undefined
  ) {
    value = schedule.place;
  } else if (
    step === "second" &&
    id === "startDate" &&
    schedule.startDate !== undefined
  ) {
    value = schedule.startDate;
  } else if (
    step === "second" &&
    id === "endDate" &&
    schedule.endDate !== undefined
  ) {
    value = schedule.endDate;
  }

  let content = (
    <input
      type={type}
      id={id}
      name={id}
      className={classes}
      onKeyUp={id === "category" ? setCategories : null}
      onBlur={id === "category" ? setCategories : null}
      required={id !== "category"}
      placeholder={placeholder}
      defaultValue={id !== "category" ? value : undefined}
    />
  );

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
  }

  return (
    <div className={`flex flex-col gap-1 my-4 ${classWidth}`}>
      <label htmlFor={id}>{label}</label>
      {content}
      {categories.length >= 1 ? (
        <CategoryComponent categories={categories} />
      ) : null}
      {categories.length === 0 && id === "category" && value}
    </div>
  );
}
