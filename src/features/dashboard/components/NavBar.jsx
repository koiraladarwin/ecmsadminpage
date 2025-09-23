import React from 'react'
import { FaCalendarAlt, FaChevronDown, FaSearch } from 'react-icons/fa'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

const NavBar = () => {
  const pathname = useLocation().pathname.split("/")[1]

  return (
    <div className="h-[8vh] bg-white px-6 py-1 flex flex-col lg:flex-row lg:justify-between gap:5 xl:gap-0 items-center sticky top-0 z-2">
      <div className="flex flex-col md:flex-row md:flex-2 items-center md:gap-20">
        {/* My Events with icon */}
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 whitespace-nowrap">
          <HiOutlineBars3CenterLeft className="text-gray-600" size={24} />
          <h1 className='text-xl'>
            {pathname ? pathname.charAt(0).toUpperCase() + pathname.slice(1) : "My Events"}
          </h1>
        </div>

        <div className='flex gap-2'>
          {/* Search with icon  */}
          <div className=" relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-3 pr-10 py-10 h-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 w-100"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>


          {/* Help with icon */}
          <div className="text-gray-600 cursor-pointer hover:text-gray-800 flex items-center space-x-1">
            <HiOutlineQuestionMarkCircle size={18} />
            <div>Help</div>
          </div>


        </div>


        {/* upgrade part */}
        <div className="flex overflow-hidden border border-sidebar-hover rounded-r-4xl rounded-l-xl">
          <button className="px-4 text-sidebar-hover text-sm font-medium flex flex-col">
            <div className='flex gap-1'>
              <span >
                Current
              </span>
              <span>
                Plan
              </span>
            </div>
            <span className="font-extrabold">STANDARD</span>
          </button>

          <button className="px-4 bg-sidebar-hover text-white text-lg font-medium rounded-4xl hover:bg-purple-700">
            Upgrade
          </button>
        </div>

      </div>
      {/* profile part */}
      <div className="flex  justify-center pt-2 lg:pt-0 lg:justify-end gap-3">
        <div className='flex items-center gap-1 justify-between'>
          <button className="text-gray-500  font-semibold ">Admin</button>
          <FaChevronDown className='mt-1 text-gray-500' />
        </div>
      </div>
    </div>
  )
}

export default NavBar

