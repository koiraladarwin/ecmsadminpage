export default function StatCard({ title, value, subtext }) {
  return (
    <div className="bg-white shadow rounded-3xl p-14 text-center min-h-[8rem] flex flex-col justify-center">
      <div className="text-2xl font-bold text-purple-600">{value}</div>
      <div className="text-sm font-semibold text-gray-700">{title}</div>
      <div className="text-xs text-gray-500 mt-1">{subtext}</div>
    </div>
  );
}
