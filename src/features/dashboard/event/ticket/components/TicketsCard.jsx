import { useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";

function TicketsCard({ title, count, link, price }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col rounded-2xl bg-white shadow-lg flex-1 min-h-[180px] overflow-hidden">

      {/* inner content */}
      <div className="flex flex-col gap-4 p-4 md:px-6">
        {/* Title and dropdown */}
        <div className="flex justify-between items-center">
          <p className="text-sm md:font-bold">{title}</p>

          {/* Dropdown */}
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
                  Edit Ticket
                </button>
                <button className="w-full px-4 py-2 hover:bg-gray-100 rounded-md text-left">
                  Change Status
                </button>
                <button className="w-full px-4 py-2 hover:bg-gray-100 rounded-md text-left text-red-600">
                  Delete Ticket
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Count and view */}
        <div className="flex md:justify-center gap-6 md:pt-6">
          <div className="text-xl md:text-4xl">{count}</div>
          <div className="flex flex-col items-center">
            <MdRemoveRedEye size={26} />
            <Link to={link}>
              <u className="cursor-pointer">view</u>
            </Link>
          </div>
        </div>
      </div>

      {/* Price btns */}
      <button className="absolute bottom-0 right-0  rounded-r-lg  bg-red-600 text-white text-xs sm:text-sm px-3 py-1 ">
        Rs {price}
      </button>
    </div>
  );
}

export default TicketsCard;
