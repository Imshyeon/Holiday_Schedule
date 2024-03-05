export default function DetailSchedule({ title, image, content }) {
  return (
    <div className="mb-5">
      <h3 className="text-xl font-bold">{title}</h3>
      <div className="h-fit bg-gray-100 rounded-xl mt-3 p-5 whitespace-pre-line flex flex-auto gap-3 items-center">
        <img
          src={image}
          alt="sample img"
          className="w-auto h-32 object-cover rounded-tl-lg rounded-br-lg"
        />
        <p className="text-pretty">{content}</p>
      </div>
    </div>
  );
}
