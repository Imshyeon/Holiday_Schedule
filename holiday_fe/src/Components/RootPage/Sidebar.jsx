import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleBtnActions } from "../../Store/sidebarToggle";

import { useQuery } from "@tanstack/react-query";
import { fetchHandler } from "../../util/http";

export default function Sidebar({ isExpended }) {
  // className
  let classExpend = "max-xl:hidden ";
  let classWidth = "w-auto";
  if (isExpended) {
    classExpend = "z-10 inline-block";
    classWidth = "w-80";
  }
  // TanStack Query
  let content;
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["schedules"],
    queryFn: fetchHandler,
  });

  if (isPending) {
    content = <p>불러오는 중....</p>;
  }

  if (isError) {
    content = <p>에러 발생, ${error}</p>;
  }

  if (data) {
    content = data.map((schedule) => {
      return (
        <SidebarList
          category={schedule.category}
          schedule={schedule}
          classWidth={classWidth}
        />
      );
    });
  }
  return (
    <aside
      className={`${classExpend} bg-main-side flex flex-col w-1/6 min-h-screen mt-5`}
    >
      <div className="text-center mt-20 grid grid-cols-1 gap-4">{content}</div>
    </aside>
  );
}

function SidebarList({ classWidth, category, schedule }) {
  return (
    <div className={`${classWidth} p-4`}>
      <div className="border-b-[1px] text-left border-divider">{category}</div>
      <SidebarItem title={schedule.title} link={`schedule/${schedule.id}`} />
    </div>
  );
}

function SidebarItem({ title, link }) {
  const dispatch = useDispatch();
  function clickBurgerHandler() {
    dispatch(toggleBtnActions.toggleBtn());
  }
  return (
    <Link to={link}>
      {/* onClick 해서 burgerClickHandler 에서 false로 해야될듯..? -> redux 필요 */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: [0.9, 1] }}
        onClick={clickBurgerHandler}
        className="mt-2 p-3 font-medium w-2/3 text-lg hover:bg-white rounded-2xl hover:p-3"
      >
        {title}
      </motion.button>
    </Link>
  );
}
