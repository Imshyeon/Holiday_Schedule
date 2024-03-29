import DetailComponent from "../Components/DetailPage/DetailComponent";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchScheduleDetailHandler } from "../util/http";
import DetailSchedule from "../Components/DetailPage/DetailSchedule";

// schdule, article, tutorial 페이지 모두 해당 jsx를 리턴 -> 데이터를 알맞게 배치.
export default function ScheduleDetailPage() {
  const params = useParams();

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
        categories={data.category}
        startDate={data.startDate}
        endDate={data.endDate}
        place={data.place}
        id="schedule"
      >
        <DetailSchedule content={data.content} />
      </DetailComponent>
    );
  }

  return <>{content}</>;
}
