export default function Input({ label, id, type = "text" }) {
  let classes = `focus:outline-none rounded-xl p-3 border-b border-gray-500/40 focus:shadow-md`;

  let classWidth = "w-[500px]";
  if (type === "date") {
    classWidth = "w-full";
  }
  return (
    <div className={`flex flex-col gap-1 my-4 ${classWidth}`}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} className={classes} />
    </div>
  );
}
