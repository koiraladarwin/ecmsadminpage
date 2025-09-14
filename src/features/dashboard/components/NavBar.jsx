import React from 'react'
import { FaCalendarAlt, FaChevronDown, FaSearch } from 'react-icons/fa'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
const NavBar = () => {
  return (
    <div className="bg-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-6">
        {/* My Events with icon */}
        <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 whitespace-nowrap">
          <FaCalendarAlt className="text-gray-600" size={25} />
          My Events
        </div>

        {/* Search with icon  */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>


        {/* Help with icon */}
        <div className="text-gray-600 cursor-pointer hover:text-gray-800 flex items-center space-x-1">
          <HiOutlineQuestionMarkCircle size={18} />
          <div>Help</div>
        </div>

        {/* upgrade part */}
        <div className="flex overflow-hidden border border-[var(--color-sidebar-hover)] rounded-r-4xl rounded-l-xl">
          <button className="px-4 text-[var(--color-sidebar-hover)] text-sm font-medium flex flex-col -space-y-1">
            <span>
              Current Plan
            </span>
            <span className="font-extrabold">STANDARD</span>
          </button>

          <button className="px-4 bg-[var(--color-sidebar-hover)] text-white text-lg font-medium rounded-4xl hover:bg-purple-700">
            Upgrade
          </button>
        </div>

      </div>
      {/* profile part */}
      <div className="flex w-full justify-end gap-3">
        <img
          src="/placeholder.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-gray-300 bg-gray-100 object-cover"
        />
        <div className='flex items-center gap-1 justify-between'>
          <button className="text-gray-500  font-semibold">Admin</button>
          <FaChevronDown className='mt-1 text-gray-500' />
        </div>
      </div>
    </div>
  )
}

export default NavBar

