import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPlaneDeparture,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.svg";

export default function MainNavigation() {
  return (
    <nav className="h-1/6">
      <ul className="flex flex-row text-center max-xl:hidden">
        <h1 className="text-xl font-bold p-2 px-9">
          <Link to="/">
            <FontAwesomeIcon
              icon={faPlaneDeparture}
              style={{ color: "#001e57" }}
              className="mr-1"
            />
            TIME TO TRAVEL
          </Link>
        </h1>
        <li className="basis-1/12 p-2">
          <Link to="tutorial" className="font-semibold">
            시작하기
          </Link>
        </li>
        <li className="basis-1/12 p-2">
          <Link to="article/:id" className="font-semibold">
            Article
          </Link>
        </li>
        <div className="absolute top-0 right-3">
          <img
            className="App-logo flex-initial max-w-10 max-h-10 text-right"
            src={logo}
            alt="logo"
          />
        </div>
      </ul>
      <ul className="xl:hidden max-xl:visible h-1/6">
        <li className="p-4 grid grid-cols-3">
          <button className="justify-self-start">
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faX} />
          </button>
          <h1 className="text-xl font-bold text-center inline-block justify-self-center">
            <Link to="/">
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                style={{ color: "#001e57" }}
                className="mr-1"
              />
              TIME TO TRAVEL
            </Link>
          </h1>
        </li>
        <div className="absolute top-2 right-3">
          <img
            className="App-logo flex-initial max-w-10 max-h-10 text-right"
            src={logo}
            alt="logo"
          />
        </div>
      </ul>
    </nav>
  );
}
