import MainNavigation from "../Components/RootPage/MainNavigation";
import Footer from "../Components/RootPage/Footer";
import RootRenderComponent from "../Components/RootPage/RootRenderComponent";
import { log } from "../log";
import Sidebar from "../Components/RootPage/Sidebar";
import { useSelector } from "react-redux";

export default function RootPage() {
  log("<RootPage /> rendered");

  const schedule = useSelector((state) => state.schedule);
  console.log(schedule);

  return (
    <>
      <MainNavigation />
      <div className="flex flex-row">
        <Sidebar />
        <RootRenderComponent />
      </div>
      <Footer />
    </>
  );
}
