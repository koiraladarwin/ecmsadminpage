export default function StatBox({ title, value }) {
  return (
    <div className=" bg-white shadow rounded-tr-3xl rounded-br-3xl rounded-tl-none rounded-bl-none p-4 text-center min-h-[6rem] flex flex-col justify-center">
      <div className="text-2xl font-bold">{value}</div>
      <div className="text-sm text-gray-700">{title}</div>
    </div>
  );
}
