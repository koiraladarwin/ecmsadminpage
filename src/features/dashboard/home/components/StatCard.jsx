import DonutChart from "./charts/DonutChart";

export default function StatCard({ title, value, total, showTotal = false }) {
  return (
    <div className="bg-white shadow-md rounded-3xl flex flex-col md:flex-row shadow-sidebar-hover items-center gap-2 lg:gap-1 xl:gap-2">
      <div>
        <DonutChart value={value} total={total} />
      </div>
      <div className="flex flex-col gap-2 pb-5 md:pb-0">
        <div className=" text-md font-bold w-28 break-words text-gray-700">{title}</div>
        <div className="md:text-3xl lg:text-3xl text-gray-500 pt-0 md:pt-5">{showTotal ? total : `${value}/${total}`}</div>
      </div>
    </div>
  );
}
