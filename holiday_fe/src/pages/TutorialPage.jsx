import backgroundImg from "../backgroundImg.jpg";
import DetailComponent from "../Components/DetailPage/DetailComponent";

// schdule, article, tutorial 페이지 모두 해당 jsx를 리턴 -> 데이터를 알맞게 배치.
export default function DetailPage() {
  const categories = ["카테고리", "Tutorial"];
  return (
    <>
      <DetailComponent title="Tutorial" categories={categories}>
        <div className="mb-5">
          <h3 className="text-xl font-bold">1일차</h3>
          <div className="h-fit bg-gray-100 rounded-xl mt-3 p-5 whitespace-pre-line flex flex-auto gap-3 items-center">
            <img
              src={backgroundImg}
              alt="sample img"
              className="w-auto h-32 object-cover rounded-tl-lg rounded-br-lg"
            />
            <p className="text-pretty">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam a
              reiciendis, necessitatibus accusamus dolorum cumque? Nobis
              possimus quo totam, asperiores, in libero illum cumque unde,
              impedit quae excepturi perferendis. Incidunt. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Est architecto dolores,
              recusandae officiis non nostrum minima repellendus eius soluta
              ullam aut quas qui maiores voluptates, illum vero hic quos
              perferendis. Quidem sequi voluptates dolores officiis. Expedita,
              in, illum sit ab facere inventore dolor magni enim possimus quasi
              veritatis perspiciatis ea laboriosam, maxime excepturi placeat
              facilis porro mollitia quia eius delectus.
            </p>
          </div>
        </div>
        <div className="mb-5">
          <h3 className="text-xl font-bold">2일차</h3>
          <div className="h-fit bg-gray-100 rounded-xl mt-3 p-5 whitespace-pre-line flex flex-auto gap-3 items-center">
            <img
              src={backgroundImg}
              alt="sample img"
              className="w-auto h-32 object-cover rounded-tl-lg rounded-br-lg"
            />
            <p className="text-pretty">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam a
              reiciendis, necessitatibus accusamus dolorum cumque? Nobis
              possimus quo totam, asperiores, in libero illum cumque unde,
              impedit quae excepturi perferendis. Incidunt. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Est architecto dolores,
              recusandae officiis non nostrum minima repellendus eius soluta
              ullam aut quas qui maiores voluptates, illum vero hic quos
              perferendis. Quidem sequi voluptates dolores officiis. Expedita,
              in, illum sit ab facere inventore dolor magni enim possimus quasi
              veritatis perspiciatis ea laboriosam, maxime excepturi placeat
              facilis porro mollitia quia eius delectus.
            </p>
          </div>
        </div>
      </DetailComponent>
    </>
  );
}
