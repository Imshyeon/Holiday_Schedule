import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import backgroundImg from "../backgroundImg.jpg";

// schdule, article, tutorial 페이지 모두 해당 jsx를 리턴 -> 데이터를 알맞게 배치.
export default function DetailPage() {
  return (
    <>
      <section className="h-screen mx-10 mt-10">
        <article className="basic-schedule-info">
          <div className="title flex flex-row justify-between items-center">
            <h1 className="text-3xl font-extrabold">🛩️ 베트남 여행</h1>
            <div className="flex flex-row gap-3 p-3">
              <button>
                <FontAwesomeIcon
                  icon={faArrowUpFromBracket}
                  className="text-gray-500 hover:text-gray-700"
                />
              </button>
              <button>
                <FontAwesomeIcon
                  icon={faCalendar}
                  className="text-gray-500 hover:text-gray-700"
                />
              </button>
            </div>
          </div>
          <div className="sub-title flex flex-row gap-5 ml-5">
            <button className="bg-gray-100 rounded-full px-3 py-1 mt-2">
              카테고리
            </button>
            <button className="bg-gray-100 rounded-full px-3 py-1 mt-2">
              여행 장소
            </button>
            <button className="bg-gray-100 rounded-full px-3 py-1 mt-2">
              여행 일정
            </button>
          </div>
        </article>
        <article className="days-schedule-info mt-10 ml-5 mr-5">
          <div>
            <h3 className="text-xl font-bold">1일차</h3>
            <div className="h-fit bg-gray-100 rounded-xl mt-3 p-5 whitespace-pre-line flex flex-auto gap-3 items-center">
              <img
                src={backgroundImg}
                alt="sample img"
                className="w-auto h-32 object-cover rounded-tl-lg rounded-br-lg"
              />
              <p className="text-pretty">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam
                a reiciendis, necessitatibus accusamus dolorum cumque? Nobis
                possimus quo totam, asperiores, in libero illum cumque unde,
                impedit quae excepturi perferendis. Incidunt. Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Est architecto dolores,
                recusandae officiis non nostrum minima repellendus eius soluta
                ullam aut quas qui maiores voluptates, illum vero hic quos
                perferendis. Quidem sequi voluptates dolores officiis. Expedita,
                in, illum sit ab facere inventore dolor magni enim possimus
                quasi veritatis perspiciatis ea laboriosam, maxime excepturi
                placeat facilis porro mollitia quia eius delectus.
              </p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
}
