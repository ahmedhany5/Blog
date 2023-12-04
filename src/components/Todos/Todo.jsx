export default function Todo({ title, completed }) {
  return (
    <ul className="p-4">
      <li
        className={`text-white pb-2 mb-2 list-disc border border-solid border-transparent border-b-[#30363D] ${
            completed ? "line-through" : ""
        }`}
      >
        {title}
      </li>
    </ul>
  );
}
