import { Link } from "react-router-dom";
export default function Sidebar({ isExpended }) {
  let classExpend = "max-xl:hidden ";
  let classWidth = "w-auto";
  if (isExpended) {
    classExpend = "z-10 inline-block";
    classWidth = "w-64";
  }
  return (
    <aside
      className={`${classExpend} bg-main-side flex flex-col w-1/6 min-h-screen mt-5`}
    >
      <div className="text-center mt-20 grid grid-cols-1 gap-4">
        <div className={`${classWidth} p-4`}>
          <div className="border-b-[1px] text-left border-divider">
            category
          </div>
          <Link to="schedule/:id">
            <button className="p-3 font-medium text-lg">title</button>
          </Link>
        </div>
        <div className={`${classWidth} p-4`}>
          <div className="border-b-[1px] text-left border-divider">
            category
          </div>
          <Link to="schedule/:id">
            <button className="p-3 font-medium text-lg">title</button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
