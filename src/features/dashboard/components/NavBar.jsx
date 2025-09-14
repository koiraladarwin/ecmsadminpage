import React from 'react'
import { FaChevronDown } from 'react-icons/fa'
const NavBar = () => {
  return (
    <div className="bg-white px-6 py-4 flex justify-between items-center">
      <div className="flex w-full justify-end gap-3">
        <img
          src="/placeholder.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-gray-300 bg-gray-100 object-cover"
        />
        <div className='flex items-center gap-1 justify-between'>
          <button className="text-gray-500  font-semibold">Darwin Koirala</button>
          <FaChevronDown  className='mt-1 text-gray-500'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar

