import MainNavigation from "../Components/RootPage/MainNavigation";
import Sidebar from "../Components/RootPage/Sidebar";
import Footer from "../Components/RootPage/Footer";
import MainPage from "../Components/RootPage/MainPage";

export default function RootPage() {
  return (
    <>
      <header className="bg-main-side fixed w-full right-0 max-xl:w-full">
        <MainNavigation />
      </header>
      <div className="flex flex-row">
        <Sidebar />
        <MainPage />
      </div>
      <Footer />
    </>
  );
}
