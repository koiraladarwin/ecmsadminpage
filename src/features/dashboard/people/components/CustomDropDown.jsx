import React, { useState } from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

function CustomDropdown({ label, options, onSelect, height = false, h }) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const handleSelect = (option) => {
    setSelected(option)
    setOpen(false)
    if (onSelect) onSelect(option)
  }

  return (
    <div className="relative " tabIndex={0} onBlur={() => setOpen(false)}>
      {/* select part */}
      <label className="font-bold text-sidebar-bg mb-1 block">{label}</label>
      <div
        onClick={() => setOpen(!open)}
        className={`border p-2 w-full ${height ? `h-${h}` : 'h-10'} flex items-center justify-between cursor-pointer bg-white`} 
      >
        {selected ? selected : `Select ${label}`}
        <RiArrowDropDownLine size={20} />
      </div>

      {/* Dropdown list */}
      {open && (
        <ul className="absolute right-[-60px] top-[50px] rounded-lg z-2 w-fit shadow-lg b bg-gray-50 px-5  py-3 mt-1 overflow-y-auto">
          {options.map((option, i) => (
            <li
              key={i}
              onClick={() => handleSelect(option)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default CustomDropdown
