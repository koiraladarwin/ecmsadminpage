import ComboChart from "./charts/ComboChart";

export default function GraphBox() {
  return (
    <div className="lg:col-span-2 min-h-[24rem] bg-white shadow rounded-3xl flex items-center justify-center text-gray-400 w-full h-full">
      <ComboChart/>
    </div>
  );
}
