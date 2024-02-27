export default function ProfileButton({ title }) {
  return (
    <li className="py-2">
      <button className="hover:bg-user-profile w-full py-2 rounded-xl">
        {title}
      </button>
    </li>
  );
}
