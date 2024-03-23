import { Link } from "react-router-dom";

export default function GeneralButton({
  title,
  classes = "bg-transparent hover:bg-gray-100",
  destination,
}) {
  return (
    <Link to={destination}>
      <button className={`rounded-xl px-7 py-3 mb-1 w-4/5 ${classes}`}>
        <li className="flex flex-row items-center justify-center">
          <p className="align-middle ml-2">{title}</p>
        </li>
      </button>
    </Link>
  );
}
