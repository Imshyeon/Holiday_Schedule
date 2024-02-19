import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBars,
  faPlaneDeparture,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.svg";

export default function ErrorPage() {
  return (
    <>
      <header className="bg-main-side fixed w-full right-0 max-xl:w-full">
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
      </header>
      <div className="flex flex-row">
        <aside className="bg-main-side flex flex-col w-1/6 min-h-screen max-xl:hidden">
          <div className="text-center mt-20 grid grid-cols-1 gap-4">
            <div className="w-auto p-4">
              <div className="border-b-[1px] text-left border-divider">
                category
              </div>
              <Link to="schedule/:id">
                <button className="p-3 font-medium text-lg">title</button>
              </Link>
            </div>
            <div className="w-auto p-4">
              <div className="border-b-[1px] text-left border-divider">
                category
              </div>
              <Link to="schedule/:id">
                <button className="p-3 font-medium text-lg">title</button>
              </Link>
            </div>
          </div>
        </aside>
        <main className="w-5/6 mt-10 max-xl:w-full">
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
          <div className="flex flex-col">
            <button className="fixed right-5 bottom-5 bg-make-schedule-btn w-12 h-12 rounded-md shadow-lg">
              +
            </button>
          </div>
        </main>
      </div>
      <footer className="bg-gradient-to-r from-main-side via-main-footer to-gray-300 h-26">
        <div className="flex flex-row justify-between sticky bottom-0">
          <ul className="p-5 ml-5">
            <li className="my-3">
              <Link to="tutorial" className="font-semibold">
                시작하기
              </Link>
            </li>
            <li className="my-3">
              <Link to="article/:id" className="font-semibold">
                Article
              </Link>
            </li>
          </ul>
          <div className="flex flex-row p-5 items-end">
            <p className="items-center p-2">CONTRIBUTORS</p>
            <img className="App-logo max-w-10 max-h-10" src={logo} alt="logo" />
          </div>
        </div>
      </footer>
    </>
  );
}
