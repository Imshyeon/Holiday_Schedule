import DetailComponent from "../Components/DetailPage/DetailComponent";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchScheduleDetailHandler, queryClient } from "../util/http";
import DetailSchedule from "../Components/DetailPage/DetailSchedule";

// schdule, article, tutorial 페이지 모두 해당 jsx를 리턴 -> 데이터를 알맞게 배치.
export default function ScheduleDetailPage() {
  const categories = ["카테고리", "여행 장소", "여행 일정"];
  const params = useParams();

  console.log(params.id);

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["schedule", { id: params.id }],
    queryFn: ({ signal }) =>
      fetchScheduleDetailHandler({ signal, id: params.id }),
  });

  let content;
  if (isPending) {
    content = <p>불러오는 중 입니다...</p>;
  }

  if (isError) {
    content = <p>{error}</p>;
  }

  if (data) {
    content = (
      <DetailComponent
        title={data.title}
        categories={categories}
        startDate={data.startDate}
        endDate={data.endDate}
        place={data.place}
        id="schedule"
      >
        <DetailSchedule
          title="1일차"
          image={data["cover_image"]}
          content={data.content}
        />
      </DetailComponent>
    );
  }

  return <>{content}</>;
}
