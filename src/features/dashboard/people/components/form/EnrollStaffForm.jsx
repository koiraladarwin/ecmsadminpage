import React from 'react'
import NormalBtn from '../NormalBtn'
import SearchableDropdown from '../SearchableDropdown'

function EnrollStaffForm() {
  const staffOptions = [
    { id: 'STF-001', name: 'Mr. Carlos Cole' },
    { id: 'STF-002', name: 'Mr. Peter Lee' },
  ]
  const handleStaffSelect = (staff) => {

  }
  return (
    <div className='w-full bg-white px-20 py-10 border-[1.3px] border-b-sidebar-bg '>
      {/* staff and events */}
      <div className='flex items-center w-full gap-8'>
        <SearchableDropdown label='Staffs' options={staffOptions} onSelect={handleStaffSelect} />
        {/* events */}
        <div className='flex flex-col flex-2'>
          <label className='font-bold text-sidebar-bg'>Events</label>
          <select className='focus:outline-none' >
            <option>Select Event</option>
            <option>Event 1</option>
            <option>Event 2</option>
            <option>Event 3</option>
            <option>Event 4</option>
            <option>Event 5</option>
          </select>
        </div>
      </div>

      {/* session and enroll */}
      <div className='flex items-end w-full gap-6 py-4'>
        <div className='flex flex-col w-[33%]'>
          <label className='font-bold text-sidebar-bg'>Session</label>
          <select className='border p-2  focus:outline-none'>
            <option>Select Session</option>
            <option>Session 1</option>
            <option>Session 2</option>
            <option>Session 3</option>
          </select>
        </div>
        {/* btn */}
        <div>
          <NormalBtn text='Enroll' type='primary' />
        </div>
      </div>
    </div>
  )
}

export default EnrollStaffForm