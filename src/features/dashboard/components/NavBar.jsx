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

  return (
    <div className="h-[8vh] md:h-[8vh] bg-white px-6 py-1  flex flex-col lg:flex-row lg:justify-between` gap:5 xl:gap-0 items-center sticky top-0 z-2">
      <div className='h-full w-full hidden lg:flex items-center'>
        <div className="flex flex-col md:flex-row md:flex-2 items-center gap-2 md:gap-12">
          {/* title*/}
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 whitespace-nowrap">
            <h1 className='text-xl'>
              {pathname ? pathname.charAt(0).toUpperCase() + pathname.slice(1) : "Dashboard"}
            </h1>
          </div>

        </div>
        {/* profile part */}
        <div className="flex  justify-center items-center pt-2 lg:pt-0 lg:justify-end gap-6">
          {/* help */}
          <div className="text-sidebar-bg cursor-pointer hover:text-gray-800 flex items-center space-x-1">
            <HiOutlineQuestionMarkCircle size={18} />
            <div>Help</div>
          </div>

          {/*  upgrade part*/}
          <div className="flex overflow-hidden border border-sidebar-hover rounded-r-4xl rounded-l-xl">
            <button className="px-4 text-sidebar-hover text-sm font-medium flex flex-col">
              <div className='flex gap-1 text-sidebar-bg text-[0.65rem] font-semibold'>
                <span >
                  Current
                </span>
                <span>
                  Plan
                </span>
              </div>
              <span className="font-extrabold text-[0.65rem]">STANDARD</span>
            </button>

            <button className="px-4 bg-sidebar-hover text-white text-[0.7rem] font-medium rounded-4xl hover:bg-purple-700">
              Upgrade
            </button>
          </div>


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
      <div className='h-full w-full flex lg:hidden flex-col gap-2 '>
        <div className='h-full w-full flex items-center justify-between'>
          <div className="flex items-center gap-2 text-lg font-semibold text-gray-800 whitespace-nowrap">
            <h1 className='text-xl'>
              {pathname ? pathname.charAt(0).toUpperCase() + pathname.slice(1) : "Dashboard"}
            </h1>
          </div>
          <HiOutlineBars3CenterLeft className="text-gray-600" size={24} onClick={() => setShowOptions(!showOptions)} />
        </div>
        <div className={`flex flex-col gap-2 absolute top-full bg-white w-full left-0 right-0 px-6 transition-all duration-300 ease-in-out overflow-hidden ${showOptions ? "max-h-[500px] -my-3 opacity-100 overflow-visible" : "max-h-[100px] my-0 opacity-0"}`}>
          <div className="text-sidebar-bg cursor-pointer hover:text-gray-800 flex items-center space-x-1">
            <HiOutlineQuestionMarkCircle size={18} />
            <div>Help</div>
          </div>
          <div className="flex overflow-hidden border border-sidebar-hover rounded-r-4xl rounded-l-xl w-fit">
            <button className="px-4 text-sidebar-hover text-[0.6rem] font-medium flex flex-col">
              <div className='flex gap-1 text-sidebar-bg text-[0.6rem]'>
                <span >
                  Current
                </span>
                <span>
                  Plan
                </span>
              </div>
              <span className="font-bold">STANDARD</span>
            </button>

            <button className="px-4 bg-sidebar-hover text-white text-[0.6rem] font-medium rounded-4xl hover:bg-purple-700">
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

