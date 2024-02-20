import { Outlet } from "react-router-dom";
import Modal from "../UI/Modal";
import { useRef } from "react";

export default function MainPage() {
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
    <main className="w-5/6 mt-10 max-xl:w-full">
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
}
