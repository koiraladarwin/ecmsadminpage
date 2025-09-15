import React from 'react'
import Button from './Button'

function Header({ title, download = false }) {
  return (
    <div className=' px-15 pt-15 pb-5  '>
      <div className='w-full flex flex-col gap-6 md:flex-row justify-between items-center border-b border-gray-800 pb-5 '>
        <div className='text-xl'>{title}</div>
        <div className='flex flex-col lg:flex-row gap-6'>
          {download ? <p className='underline text-gray-600'>Download format</p> : <Button type='primary' text='Add Staff/Attendee' />}
          <Button type='secondary' text='Add Import(csv file only)' />
        </div>
      </div>

    </div>
  )
}

export default Header