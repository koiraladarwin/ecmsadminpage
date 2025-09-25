import React from 'react'

function TitleCard({ categoryTitle }) {
  return (
    <div className='px-6 border-[1.4px] rounded-lg border-sidebar-hover py-1 bg-white '>
      <p className='text-md font-bold text-sidebar-hover text-center'>{categoryTitle}</p>
    </div>
  )
}

export default TitleCard