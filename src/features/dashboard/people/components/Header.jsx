import React from 'react'
import Button from './Button'

function Header() {
  return (
    <div className=' px-15 pt-15 pb-5  '>
      <div className='w-full flex justify-between border-b border-gray-800 pb-5 '>
        <div className='text-xl'>Staff/Attendees</div>
        <div className='flex gap-6'>
          <Button type='primary' text='Add Staff/Attendee' />
          <Button type='secondary' text='Add Import(csv file only)' />
        </div>
      </div>

    </div>
  )
}

export default Header