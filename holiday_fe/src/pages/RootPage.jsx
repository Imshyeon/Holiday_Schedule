import MainNavigation from "../Components/RootPage/MainNavigation";
import Footer from "../Components/RootPage/Footer";
import RootRenderComponent from "../Components/RootPage/RootRenderComponent";
import { log } from "../log";
import Sidebar from "../Components/RootPage/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../Store/modal";

export default function RootPage() {
  log("<RootPage /> rendered");

  const schedule = useSelector((state) => state.schedule);
  const openProfile = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  console.log(schedule);

  function closeAvatarHandler() {
    if (openProfile) {
      dispatch(profileActions.clickProfile(false));
    }
  }

  return (
    <>
      <MainNavigation />
      <div className="flex flex-row" onClick={closeAvatarHandler}>
        <Sidebar />
        <RootRenderComponent />
      </div>
      <Footer />
    </>
  );
}
