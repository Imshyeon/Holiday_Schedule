import MainNavigation from "../Components/RootPage/MainNavigation";
import Sidebar from "../Components/RootPage/Sidebar";
import Footer from "../Components/RootPage/Footer";
import Error from "../Components/RootPage/Error";

export default function ErrorPage() {
  return (
    <>
      <header className="bg-main-side fixed w-full right-0 max-xl:w-full">
        <MainNavigation />
      </header>
      <div className="flex flex-row">
        <Sidebar />
        <main className="w-5/6 mt-10 max-xl:w-full">
          <Error />
          <div className="flex flex-col">
            <button className="fixed right-5 bottom-5 bg-make-schedule-btn w-12 h-12 rounded-md shadow-lg">
              +
            </button>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
