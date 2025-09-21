import { MdOutlinePersonAdd } from "react-icons/md";

export default function HireBox() {
  return (
    <div className="lg:col-span-2 bg-white h-full shadow rounded-tr-3xl rounded-br-3xl rounded-tl-none rounded-bl-none p-4 flex items-center justify-between flex-col relative">
      <div className="w-[55px] h-full bg-primary-dark absolute left-0 top-0 flex justify-center items-center">
        <MdOutlinePersonAdd className="text-white" size={32} />
      </div>
      <span className="text-[11px] sm:text-[12px] md:text-[12px] lg:text-[12px] lg:pl-15 xl:pl-16 pl-15 sm:pl-15  md:pl-10   text-sidebar-bg font-bold md:font-extrabold lg:font-extrabold xl:font-extrabold">
        HIRE TEAM FROM OCS FOR EVENT CHECK-IN MANAGEMENT
      </span>
      <button className="bg-primary text-white text-[12px] md:text-sm ml-5 md:ml-0 lg:ml-0 xl:mt-2 px-4 md:px-8 lg:px-9 lg:mt-4 mt-3 md:mt-3 md:py-1 rounded-full">
        HIRE
      </button>
    </div>
  );
}
