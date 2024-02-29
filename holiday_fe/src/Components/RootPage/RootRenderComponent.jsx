import { Outlet, useNavigate } from "react-router-dom";
import { memo } from "react";

import { useQuery } from "@tanstack/react-query";
import { fetchHandler } from "../../utils/http";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../Store/modal";
import { categoryActions, scheduleActions } from "../../Store/schedule";

import Modal from "./Modal";

const MainPage = memo(function MainPage() {
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
      console.log("INITIALIZE");
      dispatch(modalActions.closeFirstModal());
      dispatch(scheduleActions.setStage("INITIALIZE"));
      dispatch(categoryActions.removeAllCategories());
    } else if (step === "second") {
      dispatch(modalActions.openFirstModal());
    } else {
      dispatch(scheduleActions.setStage("STAGE_MINUS"));
    }
  }

  function submitHandler(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());
    if (step === "first") {
      dispatch(scheduleActions.createBasicInfo_Title(data));
      dispatch(scheduleActions.createBasicInfo_Category(category));
      dispatch(modalActions.openSecondModal());
    } else if (step === "second") {
      dispatch(scheduleActions.createBasicInfo_2(data));
      dispatch(modalActions.closeSecondModal());
      navigate("/new");
    }
    dispatch(scheduleActions.setStage("STAGE_PLUS"));
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
          whileHover={{
            scale: 1.2,
            rotate: 180,
            duration: 2,
          }}
          transition={{ duration: 0.3 }}
          className="fixed right-5 bottom-5 bg-make-schedule-btn w-12 h-12 rounded-md focus:outline-none"
        >
          <FontAwesomeIcon icon={faPlus} />
        </motion.button>
      </div>
    </main>
  );
});
export default MainPage;
