import CategoryComponent from "../UI/CategoryComponent";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../Store/schedule";
import { useState } from "react";

export default function Input({ label, id, type = "text" }) {
  const [categories, setCategory] = useState([]);
  const dispatch = useDispatch();
  let classes = `focus:outline-none rounded-xl p-3 border-b border-gray-500/40 focus:shadow-md`;

  let classWidth = "w-[500px]";
  if (type === "date") {
    classWidth = "w-full";
  }

  let content = (
    <input
      type={type}
      id={id}
      name={id}
      className={classes}
      onKeyUp={id === "category" ? setCategories : null}
      onBlur={id === "category" ? setCategories : null}
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
    </div>
  );
}
