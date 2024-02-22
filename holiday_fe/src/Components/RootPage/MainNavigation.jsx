import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPlaneDeparture,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.svg";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MainNavigation() {
  const [isExpended, setIsExpended] = useState(false);

  function clickBurgerHandler() {
    setIsExpended((prevExpended) => !prevExpended);
  }
  return (
    <>
      <header className="z-20 bg-main-side fixed w-full right-0 max-xl:w-full">
        <nav className="h-1/6">
          <ul
            id="full-screen"
            className="flex flex-row text-center max-xl:hidden"
          >
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
          <ul id="burger" className="xl:hidden max-xl:visible h-1/6">
            <li className="p-4 grid grid-cols-3 bg-main-side/20 items-start">
              <motion.button
                className="justify-self-start focus:outline-none"
                onClick={clickBurgerHandler}
                whileHover={{ scale: 1.1 }}
                animate={{ opacity: 1, rotate: isExpended ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {!isExpended && <FontAwesomeIcon icon={faBars} />}
                {isExpended && <FontAwesomeIcon icon={faX} />}
              </motion.button>
              <div className="grid justify-center">
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
                {isExpended && <Sidebar isExpended={isExpended} />}
              </div>
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
      </header>
    </>
  );
}
