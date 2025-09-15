import React from "react";
import { IoEye } from "react-icons/io5";
import { LiaWhatsapp } from "react-icons/lia";
import { MdOutlineMail } from "react-icons/md";

const PersonListCard = ({ person }) => {
  return (
    <div className="w-full flex flex-col rounded-xl shadow-md shadow-black/10 pt-5 border border-gray-800/10 border-solid">
      <div className="flex gap-3 border-b-2 border-gray-800/10 border-solid ps-5 pb-5">
        <img
          src={person.image}
          alt={person.name}
          className="w-14 h-14 rounded-full border-2 border-sidebar-hover object-cover"
        />
        <div className="flex flex-col">
          <div className="flex flex-col -space-y-1">
            <span className="text-sm font-semibold">{person.name}</span>
            <span className="text-gray-800/50 font-semibold text-xs">{person.role}</span>
          </div>
          <span className="text-sm font-medium text-gray-500">{person.company}</span>
        </div>
      </div>
      <div className="py-3 flex justify-center">
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
