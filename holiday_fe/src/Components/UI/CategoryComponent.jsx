export default function CategoryComponent({ categories }) {
  return (
    <div className="flex gap-1 mt-1 mb-0">
      {categories.map((category) => (
        <p
          className="px-2 py-1 bg-main-side rounded-full w-fit text-xs text-sky-800"
          key={category}
        >
          {category}
        </p>
      ))}
    </div>
  );
}
