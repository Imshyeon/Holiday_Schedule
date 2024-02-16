import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "../logo.svg";

export default function RootPage() {
  return (
    <>
      <header className="bg-main-side fixed w-5/6 right-0 max-xl:w-full">
        <nav className="h-1/6">
          <ul className="flex flex-row text-center max-xl:hidden">
            <li className="basis-1/12 p-2">
              <Link>시작하기</Link>
            </li>
            <li className="basis-1/12 p-2">
              <Link>Article</Link>
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
            <li className="p-4">
              <button>
                <FontAwesomeIcon icon={faBars} />
                <FontAwesomeIcon icon={faX} />
              </button>
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
              <button className="p-3">title</button>
            </div>
            <div className="w-auto p-4">
              <div className="border-b-[1px] text-left border-divider">
                category
              </div>
              <button className="p-3">title</button>
            </div>
          </div>
        </aside>
        <main className="w-5/6 mt-10 max-xl:w-full">
          <Outlet />
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
              <Link>시작하기</Link>
            </li>
            <li className="my-3">
              <Link>Article</Link>
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
