import MainNavigation from "../Components/RootPage/MainNavigation";
import Footer from "../Components/RootPage/Footer";
import MainPage from "../Components/RootPage/RootRenderComponent";
import { log } from "../log";
import Sidebar from "../Components/RootPage/Sidebar";

export default function RootPage() {
  log("<RootPage /> rendered");

  return (
    <>
      <MainNavigation />
      <div className="flex flex-row">
        <Sidebar />
        <MainPage />
      </div>
      <Footer />
    </>
  );
}
