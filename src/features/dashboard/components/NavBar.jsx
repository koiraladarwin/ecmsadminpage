import React, { useState } from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi'
import { useLocation } from 'react-router-dom'
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { useAuth } from '../../auth/context/AuthContext';

const NavBar = () => {
  const pathname = useLocation().pathname.split("/")[1]
  const { logout } = useAuth()
  const [showOptions, setShowOptions] = useState(false)
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);

  return (
    <div className="h-[12vh] md:h-[16vh] bg-white px-6 py-1  flex flex-col lg:flex-row lg:justify-between` gap:5 xl:gap-0 items-center sticky top-0 z-2">
      <div className='h-full w-full hidden lg:flex items-center'>
        <div className="flex flex-col md:flex-row md:flex-2 items-center gap-2 md:gap-12">
          {/* My Events with icon */}
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 whitespace-nowrap">
            <HiOutlineBars3CenterLeft className="text-gray-600" size={24} />
            <h1 className='text-xl'>
              {pathname ? pathname.charAt(0).toUpperCase() + pathname.slice(1) : "Dashboard"}
            </h1>
          </div>

          <div className='flex gap-2'>
            {/* Search with icon  */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search for an event..."
                className="h-8 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-75 placeholder:text-sm "
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>


            {/* Help with icon */}
            <div className="text-sidebar-bg cursor-pointer hover:text-gray-800 flex items-center space-x-1">
              <HiOutlineQuestionMarkCircle size={18} />
              <div>Help</div>
            </div>


          </div>


          {/* upgrade part */}
          <div className="flex overflow-hidden border border-sidebar-hover rounded-r-4xl rounded-l-xl">
            <button className="px-4 text-sidebar-hover text-sm font-medium flex flex-col">
              <div className='flex gap-1 text-sidebar-bg text-sm'>
                <span >
                  Current
                </span>
                <span>
                  Plan
                </span>
              </div>
              <span className="font-bold">STANDARD</span>
            </button>

            <button className="px-4 bg-sidebar-hover text-white text-md font-medium rounded-4xl hover:bg-purple-700">
              Upgrade
            </button>
          </div>

        </div>
        {/* profile part */}
        <div className="flex  justify-center pt-2 lg:pt-0 lg:justify-end gap-3">
          <div className="relative w-fit group cursor-pointer pe-2">
            {/* Admin button */}
            <button className="flex items-center gap-1 text-gray-500 font-semibold">
              Admin <FaChevronDown className="mt-1 text-gray-500" />
            </button>
            {/* Dropdown menu */}
            <div className="absolute top-full -left-4 w-28 shadow-lg z-50 rounded-2xl py-2 px-1 bg-gray-100 hidden group-hover:block">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-sm">Profile</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-sm text-red-500" onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
      <div className='h-full w-full flex lg:hidden flex-col gap-2'>
        <div className='h-full w-full flex items-center justify-between'>
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 whitespace-nowrap">
            <h1 className='text-xl'>
              {pathname ? pathname.charAt(0).toUpperCase() + pathname.slice(1) : "Dashboard"}
            </h1>
          </div>
          <HiOutlineBars3CenterLeft className="text-gray-600" size={24} onClick={() => setShowOptions(!showOptions)} />
        </div>
        <div className={`flex flex-col gap-2 absolute top-full bg-white w-full left-0 right-0 px-6 transition-all duration-300 ease-in-out overflow-hidden ${showOptions ? "max-h-[500px] -my-3 opacity-100 overflow-visible" : "max-h-[100px] my-0 opacity-0"}`}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for an event..."
              className="h-8 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 w-75 placeholder:text-sm"
            />
            <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <div className="text-sidebar-bg cursor-pointer hover:text-gray-800 flex items-center space-x-1">
            <HiOutlineQuestionMarkCircle size={18} />
            <div>Help</div>
          </div>
          <div className="flex overflow-hidden border border-sidebar-hover rounded-r-4xl rounded-l-xl w-fit">
            <button className="px-4 text-sidebar-hover text-sm font-medium flex flex-col">
              <div className='flex gap-1 text-sidebar-bg text-sm'>
                <span >
                  Current
                </span>
                <span>
                  Plan
                </span>
              </div>
              <span className="font-bold">STANDARD</span>
            </button>

            <button className="px-4 bg-sidebar-hover text-white text-md font-medium rounded-4xl hover:bg-purple-700">
              Upgrade
            </button>
          </div>
          {/* admin */}
          <div className="relative w-fit group cursor-pointer">
            {/* Admin button */}
            <button className="flex items-center gap-1 text-gray-500 font-semibold">
              Admin <FaChevronDown className="mt-1 text-gray-500" />
            </button>
            {/* Dropdown menu */}
            <div className="absolute top-full w-40 shadow-lg z-50 rounded-2xl py-2 px-3 bg-gray-100 hidden group-hover:block">
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-sm">Profile</button>
              <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 rounded-sm text-red-500" onClick={logout}>Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

