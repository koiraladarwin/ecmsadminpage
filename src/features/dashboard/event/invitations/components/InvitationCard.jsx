import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";

function InvitationCard({ title, count, link }) {
  const [open, setOpen] = useState(false);

  return (
    <div className=" flex flex-col rounded-2xl p-2 lg:px-10 lg:py-8 md:bg-white md:shadow-lg flex-1 relative">
      {/* title and three-dots btns */}
      <div className="flex justify-between items-center">
        <p className="text-sm md:font-bold">{title}</p>

        {/* dropdown  */}
        <div
          className="relative"
          tabIndex={0}
          onBlur={() => setOpen(false)}
        >
          <button
            onClick={() => setOpen(!open)}
            className="cursor-pointer"
          >
            <BsThreeDotsVertical size={18} />
          </button>

          {open && (
            <div className="absolute top-full right-0 mt-2 w-40 rounded-md shadow-lg bg-white border border-gray-200 z-10">
              <button className="w-full px-4 py-2 hover:bg-gray-100 rounded-md text-left">
                Edit Invitation
              </button>
              <button className="w-full px-4 py-2 hover:bg-gray-100 rounded-md text-left">
                Change Status
              </button>
              <button className="w-full px-4 py-2 hover:bg-gray-100 rounded-md text-left text-red-600">
                Delete Invitation
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Count and view link */}
      <div className="flex md:justify-between gap-6 md:pt-6 ">
        <div className=" text-xl  md:text-3xl">{count}</div>
        <div className="flex flex-col items-center">
          <MdRemoveRedEye size={24} />
          <Link to={link}>
            <u className="cursor-pointer">view</u>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InvitationCard;
