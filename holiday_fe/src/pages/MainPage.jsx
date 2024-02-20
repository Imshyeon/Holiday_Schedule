import backgroundImg from "../backgroundImg.jpg";
import { Link } from "react-router-dom";
import { log } from "../log";

export default function MainPage() {
  log("<MainPage /> rendered");
  return (
    <>
      <section className="bg-gray-500 h-64 p-5">
        <div className="grid grid-cols-6 grid-rows-auto text-center auto-rows-auto">
          <div className="text-center col-start-2 col-span-4 py-24">
            <input
              type="text"
              placeholder="검색"
              className="p-5 rounded-full hover:outline-none focus:outline-none w-5/6 align-middle"
            />
          </div>
        </div>
      </section>
      <section className="xl:mx-10 max-xl:mx-5">
        <article className="mt-5 mb-8">
          <h3 className="font-bold">생성한 여행 스케줄</h3>
          <div className="w-full h-64 mt-2 overflow-x-scroll overscroll-auto">
            <div className="flex gap-5">
              <Link to="schedule/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="schedule/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="schedule/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="schedule/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="schedule/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="schedule/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
            </div>
          </div>
        </article>
        <article className="mt-5 mb-8">
          <h3 className="font-bold">Articles</h3>
          <div className="w-full h-64 mt-2 overflow-x-scroll overscroll-auto">
            <div className="flex gap-5">
              <Link to="article/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="article/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="article/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="article/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="article/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
              <Link to="schedule/:id">
                <div className="h-64 w-64">
                  <img
                    src={backgroundImg}
                    alt="scroll example img"
                    className="h-64 mr-5 rounded-md hover:rounded-3xl"
                  />
                </div>
              </Link>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
