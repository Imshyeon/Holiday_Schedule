import CategoryComponent from "../UI/CategoryComponent";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../Store/schedule";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef } from "react";

export default function Input({ label, id, type = "text" }) {
  const [categories, setCategory] = useState([]);
  const placeRef = useRef(null);
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

  if (id === "place") {
    content = (
      <div className="flex flex-row w-full">
        <input
          type={type}
          id={id}
          name={id}
          className={classes + " w-full"}
          ref={placeRef}
          placeholder="여행 장소를 입력해주세요. (예, 뉴욕, 프랑스)"
        />
        <button
          type="button"
          onClick={findGoogleMapHandler}
          className="px-3 py-1 focus:outline-none"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
        </button>
      </div>
    );
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
  }

  function findGoogleMapHandler(event) {
    event.preventDefault();
    console.log(placeRef.current.value);
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
