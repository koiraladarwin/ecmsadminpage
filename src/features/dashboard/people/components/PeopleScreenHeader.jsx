import React from 'react'
import Button from './Button'

function PeopleScreenHeader({ title, download = false, showForm = true }) {
  return (
    <div className='pt-15 pb-5 w-full '>
      <div className='w-full flex flex-col gap-6 md:flex-row justify-between items-center border-b border-gray-800 pb-5 '>
        <div className='text-xl'>{title}</div>
        <div className='flex flex-col lg:flex-row lg:items-center gap-6'>
          {download ? <p className='underline text-gray-600'>Download format</p> : <Button type='primary' text='Add Staff/Attendee' />}
          {
            showForm && <Button type='secondary' text={title==="Add a New Staff/Attendee" ? 'Import(csv file only)' : 'Add Import (csv file only)'} />
          }
        </div>
      </div>

    </div>
  )
}

export default PeopleScreenHeader