import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Error() {
  return (
    <section className="flex flex-col justify-center align-middle items-center h-dvh">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold">Error Message</h1>
        <p className="text-xl">Error Status Code</p>
        <Link to="/">
          <button className="border-none bg-transparent p-2">
            <FontAwesomeIcon
              icon={faHouse}
              className="text-gray-400 hover:text-gray-500"
            />
          </button>
        </Link>
      </div>
    </section>
  );
}
