import { Outlet, useNavigate } from "react-router-dom";
import { memo } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchHandler } from "../../utils/http";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../Store/modal";
import { scheduleActions } from "../../Store/schedule";

import Modal from "./Modal";
import { log } from "../../log";

const MainPage = memo(function MainPage() {
  log("<RootRenderComponent /> rendered");
  const { step } = useSelector((state) => state.modal);
  const { category } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { data, isPending, isError, error } = useQuery({
  //   queryKey: ["schedules"],
  //   queryFn: () => fetchHandler(),
  // });

  function openModalHandler() {
    dispatch(modalActions.openFirstModal());
  }

  function closeModal() {
    if (step === "first") {
      dispatch(modalActions.closeFirstModal());
    } else {
      dispatch(modalActions.closeSecondModal());
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    console.log("submit ==> ", step);
    if (step === "first") {
      dispatch(scheduleActions.createBasicInfo_Title(data));
      dispatch(scheduleActions.createBasicInfo_Category(category));
      dispatch(modalActions.openSecondModal());
    } else if (step === "second") {
      dispatch(scheduleActions.createBasicInfo_2(data));
      dispatch(modalActions.closeSecondModal());
      navigate("/new");
    }
    event.target.reset();
  }

  return (
    <main className="w-5/6 max-xl:w-full">
      <Outlet />
      <Modal
        open={step === "first"}
        onClose={step === "first" ? closeModal : null}
        onSubmit={submitHandler}
        step={step}
      />
      <Modal
        open={step === "second"}
        onClose={step === "second" ? closeModal : null}
        onSubmit={submitHandler}
        step={step}
      />
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
