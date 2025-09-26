import React from 'react'

function FilterTab({ filterByTitle1, filterByTitle2, activeTab, setActiveTab, bottomBorder = false }) {
  return (
    <div className='w-full'>
      <div className={`flex w-fit bg-white rounded-tl-xl rounded-tr-xl ${bottomBorder ? 'border-t border-l border-r border-b-0' : 'border'} border border-gray-800`}>
        <button
          className={`px-7 py-1 font-semibold rounded-tl-xl rounded-tr-xl ${activeTab === filterByTitle1 ? 'bg-sidebar-hover text-white' : 'text-gray-700'
            }`}
          onClick={() => setActiveTab(filterByTitle1)}
        >
          {filterByTitle1}
        </button>
        <button
          className={`px-7 py-1 font-semibold rounded-tl-xl rounded-tr-xl ${activeTab === filterByTitle2 ? 'bg-sidebar-hover text-white' : 'text-gray-700'
            }`}
          onClick={() => setActiveTab(filterByTitle2)}
        >
          {filterByTitle2}
        </button>
      </div>
    </div>
  )
}

export default FilterTab
