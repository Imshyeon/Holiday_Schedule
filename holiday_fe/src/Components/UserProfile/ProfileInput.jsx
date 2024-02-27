export default function ProfileInput({
  label,
  id,
  type = "text",
  value,
  edit,
}) {
  let content = (
    <div className="mt-2">
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-transparent max-w-xl">
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={id}
          className={`block flex-1 rounded-md border-0 bg-transparent py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
          defaultValue={value}
          disabled={edit ? false : true}
          required
        />
      </div>
    </div>
  );

  if (id === "userInfo") {
    content = (
      <textarea
        name={id}
        id={id}
        cols="30"
        rows="10"
        defaultValue={value}
        disabled={edit ? false : true}
        className={`block w-full resize-none rounded-md bg-transparent border-0 py-1.5 pl-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500`}
        required
      />
    );
  }

  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      {content}
    </>
  );
}
