export default function StatBox({ title, value, Icon }) {
  return (
    <div className="bg-white h-full shadow rounded-tr-3xl rounded-br-3xl rounded-tl-none rounded-bl-none p-4 pr-8 text-center min-h-[6rem] flex flex-col items-end relative">
      <div className="w-[55px] h-full bg-primary-dark absolute left-0 top-0 flex justify-center items-center">
        <Icon className="text-white" size={32} />
      </div>
      <div className="text-primary-dark font-bold text-sm">{title}</div>
      <div className="text-4xl font-bold text-textgray">{value}</div>
    </div>
  );
}

