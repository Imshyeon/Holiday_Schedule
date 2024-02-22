import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Sidebar({ isExpended }) {
  let classExpend = "max-xl:hidden ";
  let classWidth = "w-auto";
  if (isExpended) {
    classExpend = "z-10 inline-block";
    classWidth = "w-80";
  }
  return (
    <aside
      className={`${classExpend} bg-main-side flex flex-col w-1/6 min-h-screen mt-5`}
    >
      <div className="text-center mt-20 grid grid-cols-1 gap-4">
        <SidebarList category="해외" classWidth={classWidth} />
        <SidebarList category="국내" classWidth={classWidth} />
      </div>
    </aside>
  );
}

function SidebarList({ classWidth, category }) {
  return (
    <div className={`${classWidth} p-4`}>
      <div className="border-b-[1px] text-left border-divider">{category}</div>
      {category === "해외" && <SidebarItem title="✈️ 베트남 여행" />}
      {category === "국내" && <SidebarItem title="🚎 군산 여행" />}
    </div>
  );
}

function SidebarItem({ title }) {
  return (
    <Link to="schedule/:id">
      {/* onClick 해서 burgerClickHandler 에서 false로 해야될듯..? -> redux 필요 */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        className="mt-2 p-3 font-medium w-2/3 text-lg hover:bg-white rounded-2xl hover:p-3"
      >
        {title}
      </motion.button>
    </Link>
  );
}
