import MainNavigation from "../Components/RootPage/MainNavigation";
import Footer from "../Components/RootPage/Footer";
import Error from "../Components/RootPage/Error";

export default function ErrorPage() {
  return (
    <>
      <header className="bg-main-side fixed w-full right-0 max-xl:w-full">
        <MainNavigation />
      </header>
      <>
        <Error />
        <div className="flex flex-col">
          <button className="fixed right-5 bottom-5 bg-make-schedule-btn w-12 h-12 rounded-md shadow-lg">
            +
          </button>
        </div>
      </>
      <Footer />
    </>
  );
}
