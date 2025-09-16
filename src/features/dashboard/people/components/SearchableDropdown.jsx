import React, { useState } from 'react'

function SearchableDropdown({ label, options, onSelect }) {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const filterOptions = options.filter((option) => option.name.toLowerCase().includes(search.toLowerCase()))

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setSelected(null)
    setOpen(true)
  }
  const handleSelect = (option) => {
    setSelected(option)
    setSearch('')
    setOpen(false)
    if (onSelect) onSelect(option)
  }
  return (
    <div className='relative'>
      <label className='font-bold text-bg-sidebar'>{label}</label>
      <input
        type='text'
        placeholder={`Type ${label} Name`}
        onChange={handleSearch}
        onClick={() => setOpen(!open)}
        value={selected ? selected.name : search}
        className=' p-2 w-full focus:outline-none h-10'
        style={{ border: "1px solid black" }}
      />
      {
        open &&
        <>
          <ul className='absolute right-[-120px] top-[50px] rounded-lg z-2 w-fit  shadow-lg b bg-gray-50 px-5  py-3 mt-1 overflow-y-auto'>
            {filterOptions.length > 0 ? (
              filterOptions.map((option, i) => (
                <li
                  key={i}
                  className='p-2 hover:bg-gray-200 cursor-pointer'
                  onClick={() => handleSelect(option)}>
                  {option.id} {option.name}
                </li>
              ))
            ) : (
              <li>No results found</li>
            )}
          </ul>
        </>

      }

    </div>
  )
}

export default SearchableDropdown