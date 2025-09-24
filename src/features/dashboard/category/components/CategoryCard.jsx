import React from 'react'
import TitleCard from './TitleCard'

function CategoryCard({ data, categoryTitle }) {
  return (
    <>
      <div className="bg-white border border-sidebar-bg py-10 relative">
        <div className='absolute -top-[20px] left-[20px] sm:left-[95px] md:left-[50px] lg:left-[50px]'>
          <TitleCard categoryTitle={categoryTitle} />
        </div>
        {/* <div className="absolute -top-[20px] left-1/2 transform -translate-x-1/2 ">
          <TitleCard categoryTitle={categoryTitle} />
        </div> */}
        {data.map((item, index) => (
          <div key={index} className="rounded py-1 pl-10  ">{item}</div>
        ))}
      </div>
    </>
  )
}

export default CategoryCard
