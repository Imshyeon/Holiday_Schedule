import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import DetailScheduleModal from "./DetailModal";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteScheduleHandler, queryClient } from "../../util/http";
import { ErrorMessage } from "../UI/DataIndicator";

export default function DetailComponent({
  title,
  categories,
  children,
  id,
  ...props
}) {
  const start = new Date(props.startDate).toLocaleDateString();
  const end = new Date(props.endDate).toLocaleDateString();
  const dialog = useRef();
  const navigate = useNavigate();

  function deleteSchedulehandler() {
    dialog.current.open();
  }

  const params = useParams();
  const postId = +params.id;

  function onDelete() {
    mutate(postId);
  }

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: deleteScheduleHandler,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["schedules"],
        refetchType: "none",
      });
      navigate("/");
    },
  });

  let deleteText = "삭제";
  if (isPending) {
    deleteText = "삭제 중..";
  }

  if (isError) {
    console.log(error.message);
  }

  return (
    <>
      {isError && <ErrorMessage error={error} />}
      <DetailScheduleModal
        ref={dialog}
        title="해당 스케줄을 삭제하시겠습니까?"
        scheduleTitle={title}
        onDelete={onDelete}
        deleteText={deleteText}
      />
      <section className="h-screen p-16 max-xl:p-20">
        <article className="basic-schedule-info">
          <div className="title flex flex-row justify-between items-center">
            <h1 className="text-3xl font-extrabold">{title}</h1>
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
              <button>
                <FontAwesomeIcon
                  icon={faTrashCan}
                  className="text-gray-500 hover:text-gray-700"
                  onClick={deleteSchedulehandler}
                />
              </button>
            </div>
          </div>
          <div className="sub-title flex flex-row justify-start gap-5 ml-5">
            {categories.map((category) => {
              return (
                <button
                  key={category}
                  className="bg-gray-100 rounded-full px-3 py-1 mt-2"
                  disabled
                >
                  {category}
                </button>
              );
            })}
            {id === "schedule" && (
              <>
                <button
                  key={start}
                  className="bg-gray-100 rounded-full px-3 py-1 mt-2"
                  disabled
                >
                  {start} ~ {end}
                </button>
                <button
                  key={props.place}
                  className="bg-gray-100 rounded-full px-3 py-1 mt-2"
                  disabled
                >
                  {props.place}
                </button>
              </>
            )}
          </div>
        </article>
        <article className="days-schedule-info mt-10 ml-5 mr-5">
          {children}
        </article>
      </section>
    </>
  );
}
