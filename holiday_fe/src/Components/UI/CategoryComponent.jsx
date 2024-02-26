import { useDispatch, useSelector } from "react-redux";
import { categoryActions } from "../../Store/schedule";

export default function CategoryComponent({ categories }) {
  const dispatch = useDispatch();
  const { category } = useSelector((state) => state.category);

  function deleteCategory(event) {
    console.log(event.target.id);
    dispatch(categoryActions.removeCategory(event.target.id));
  }

  return (
    <div className="flex gap-1 mt-1 mb-0">
      {category.map((category) => (
        <button
          type="button"
          className="px-2 py-1 bg-main-side rounded-full w-fit text-xs text-sky-800 "
          key={category}
          id={category}
          tabIndex="-1"
          onClick={deleteCategory}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
