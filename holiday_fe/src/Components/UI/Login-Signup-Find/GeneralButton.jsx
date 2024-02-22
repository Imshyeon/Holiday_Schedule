export default function GeneralButton({
  title,
  classes = "bg-transparent hover:bg-gray-100",
}) {
  return (
    <button className={`rounded-xl px-7 py-3 mb-1 w-3/5 ${classes}`}>
      <li className="flex flex-row items-center justify-center">
        <p className="align-middle ml-2">{title}</p>
      </li>
    </button>
  );
}
