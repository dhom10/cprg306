export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 m-4 bg-slate-900 max-w-sm rounded-lg shadow">
      <span className="block font-semibold text-white">{name}</span>
      <span className="block text-gray-300">Buy {quantity} in {category}</span>
    </li>
  );
}