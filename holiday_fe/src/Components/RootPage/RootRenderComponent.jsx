import { Outlet } from "react-router-dom";
import Modal from "./Modal";
import { useRef, memo } from "react";
import { log } from "../../log";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const MainPage = memo(function MainPage() {
  log("<RootRenderComponent /> rendered");
  const modal = useRef();

  function openModalHandler() {
    modal.current.open();
  }

  function closeModalHandler() {
    modal.current.close();
  }

  return (
    <main className="w-5/6 max-xl:w-full">
      <Outlet />
      <Modal ref={modal} onClose={closeModalHandler} />
      <div className="flex flex-col">
        <motion.button
          onClick={openModalHandler}
          whileHover={{ scale: 1.1, rotate: 180, duration: 2 }}
          transition={{ duration: 0.3 }}
          className="fixed right-5 bottom-5 bg-make-schedule-btn w-12 h-12 rounded-md shadow-lg focus:outline-none hover:shadow-xl"
        >
          <FontAwesomeIcon icon={faPlus} />
        </motion.button>
      </div>
    </main>
  );
});
export default MainPage;
