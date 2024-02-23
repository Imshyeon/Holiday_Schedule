export default function NewScheduleComponent({ label, id, onChange }) {
  return (
    <div className="border-b border-gray-900/10 pb-12">
      <div className="col-span-full">
        <label
          htmlFor={id}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            type="file"
            id={id}
            name="image"
            onChange={onChange}
            accept="image/*"
            className="mb-2"
          />
          <textarea
            id={id}
            name={id}
            rows="10"
            className="block resize-none w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
    </div>
  );
}
