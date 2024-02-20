import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
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
  );
}
