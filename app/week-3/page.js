import ItemList from "./itme-list";

export default function Page() {
  return (
    <main className="bg-slate-950 min-h-screen p-6">
      <div>
        <h2 className="text-3xl font-bold m-2 text-white">Shopping List</h2>
        <ItemList />
      </div>
    </main>
  );
}