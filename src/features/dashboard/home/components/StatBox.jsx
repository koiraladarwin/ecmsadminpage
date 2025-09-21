export default function StatBox({ title, value, Icon }) {
  return (
    <div className="bg-white h-full shadow rounded-tr-3xl rounded-br-3xl rounded-tl-none rounded-bl-none p-4 pr-8 text-center min-h-[6rem] flex flex-col items-end relative">
      <div className="w-[55px] h-full bg-primary-dark absolute left-0 top-0 flex justify-center items-center">
        <Icon className="text-white" size={32} />
      </div>
      <div className="text-primary-dark font-bold md:font-extrabold lg:font-extrabold xl:font-extrabold text-[11px] sm:text-[12px] pl-14  md:pl-15 lg:pl-15 xl:pl-15  md:text-[12px] lg:text-[12px] xl:text-[12px] text-sm">{title}</div>
      <div className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-textgray">{value}</div>
    </div>
  );
}

