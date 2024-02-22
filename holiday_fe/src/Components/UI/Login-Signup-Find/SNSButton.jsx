import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SNSButton({ icon, color, title }) {
  return (
    <button
      className={`rounded-xl px-7 py-3 mb-6 w-3/5 bg-${color}-300/70 hover:bg-${color}-300/90`}
    >
      <li className="flex flex-row items-center justify-center">
        <FontAwesomeIcon icon={icon} className="w-5 mr-2" />
        <p className="align-middle ml-2">{title}</p>
      </li>
    </button>
  );
}
