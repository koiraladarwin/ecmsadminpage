import React from 'react'
import Button from './Button'

function PeopleScreenHeader({ title, download = false, showForm = true, showBtn = true }) {
  return (
    <div className='pt-10 pb-5 w-full '>
      <div className='w-full flex flex-col gap-6 md:flex-row justify-between items-center border-b border-gray-800 pb-5 '>
        <div className='text-xl'>{title}</div>
      </div>

    </div>
  )
}

export default PeopleScreenHeader
