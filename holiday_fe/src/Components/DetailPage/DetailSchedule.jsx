export default function DetailSchedule({ content }) {
  let scheduleContent;

  if (content.length > 0) {
    scheduleContent = content.map((schedule, idx) => {
      return (
        <div className="mb-5" key={idx}>
          <h3 className="text-xl font-bold">{idx + 1}일차</h3>
          <div className="h-fit bg-gray-100 rounded-xl mt-3 p-5 whitespace-pre-line flex flex-auto gap-3 items-center">
            <p className="text-pretty">{schedule.content}</p>
          </div>
        </div>
      );
    });
  }

  return scheduleContent.map((content) => {
    return content;
  });
}
