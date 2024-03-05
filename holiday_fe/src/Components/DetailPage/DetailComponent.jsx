import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function DetailComponent({
  title,
  categories,
  children,
  id,
  ...props
}) {
  const start = new Date(props.startDate).toLocaleDateString();
  const end = new Date(props.endDate).toLocaleDateString();

  return (
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
  );
}
