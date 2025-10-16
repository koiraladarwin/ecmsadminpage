import { IoEye } from "react-icons/io5";
import { LiaWhatsapp } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";

const PersonListCard = ({ person, activeTab }) => {
  const name = activeTab === "staff" ? person?.name : person?.full_name
  const gmail = activeTab === "staff" ? person?.staff_gmail : person?.gmail
  const number = activeTab === "staff" ? person?.phone : person?.phone_number
  return (
    <div className="w-full flex flex-col rounded-xl shadow-md shadow-black/10 pt-5 border border-gray-800/10 border-solid ">
      <div className="flex flex-col md:flex-row gap-3 border-b-2 border-gray-800/10 border-solid ps-5 pb-5 flex-1">
        <img
          src={person?.image || '/placeholder.jpg'}
          alt={name}
          className="w-14 h-14 rounded-full border-2 border-sidebar-hover object-cover  "
        />
        <div className="flex flex-col flex-1 min-w-0">
          <div className="flex flex-col -space-y-1">
            <span className="text-xs font-semibold break-words">{name}</span>
            <span className="text-gray-800/50 font-semibold text-xs pt-1 break-words">{person?.position}</span>
          </div>
          <span className="text-xs font-medium text-gray-500">{person?.company}</span>
          <div className="flex flex-col  text-gray-500 text-xs mt-1 break-words">
            <span>{gmail}</span>
            <span>{number}</span>
          </div>

        </div>
      </div>
      <div className="py-3 flex md:justify-center items-start md:px-0 px-8">
        <div className="w-fit flex gap-2">
          <IoEye className="text-2xl text-gray-800/30 cursor-pointer" />
          <LiaWhatsapp className="text-2xl text-gray-800/30 cursor-pointer" />
          <MdOutlineMail className="text-2xl text-gray-800/30 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default PersonListCard;
