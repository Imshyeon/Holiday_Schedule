import { Outlet } from "react-router-dom";
import Modal from "../UI/Modal";
import { useRef, memo } from "react";
import { log } from "../../log";

const MainPage = memo(function MainPage() {
  log("<MainPage /> -> Component rendered");
  const modal = useRef();

  function openModalHandler() {
    console.log("open modal");
    modal.current.open();
  }

  function closeModalHandler() {
    console.log("close modal");
    modal.current.close();
  }

  return (
    <main className="w-5/6 max-xl:w-full">
      <Outlet />
      <Modal ref={modal} onClose={closeModalHandler} />
      <div className="flex flex-col">
        <button
          onClick={openModalHandler}
          className="fixed right-5 bottom-5 bg-make-schedule-btn w-12 h-12 rounded-md shadow-lg focus:outline-none"
        >
          +
        </button>
      </div>
    </main>
  );
});
export default MainPage;
