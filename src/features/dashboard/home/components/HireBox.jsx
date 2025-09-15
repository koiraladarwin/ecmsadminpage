import { MdOutlinePersonAdd} from "react-icons/md";

export default function HireBox() {
  return (
    <div className="lg:col-span-2 bg-white h-full shadow rounded-tr-3xl rounded-br-3xl rounded-tl-none rounded-bl-none p-4 flex items-center justify-between flex-col relative">
      <div className="w-[55px] h-full bg-primary-dark absolute left-0 top-0 flex justify-center items-center">
      <MdOutlinePersonAdd className="text-white" size={32} />
      </div>
      <span className="text-sm mb-2 text-center font-bold">
        HIRE TEAM FROM OCS FOR EVENT CHECK-IN MANAGEMENT
      </span>
      <button className="bg-primary text-white px-8  rounded-full">
        Hire
      </button>
    </div>
  );
}
