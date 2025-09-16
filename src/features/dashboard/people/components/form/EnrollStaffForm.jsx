import React, { useState } from 'react'
import NormalBtn from '../NormalBtn'
import SearchableDropdown from '../SearchableDropdown'
import CustomDropdown from '../CustomDropDown'
import Swal from 'sweetalert2'

function EnrollStaffForm() {
  const staffOptions = [
    { id: 'STF-001', name: 'Mr. Carlos Cole' },
    { id: 'STF-002', name: 'Mr. Peter Lee' },
  ]
  const eventOptions = ['Event1', 'Event2', 'Event3']
  const sessionOptions = ['Session1', 'Session2', 'Session3']

  const [formData, setFormData] = useState({
    attendee: null,
    event: null,
    session: null,
  })


  const handleSelect = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = () => {
    if (!formData.attendee || !formData.event || !formData.session) {
      Swal.fire('Please Fill all the fields!')
      return
    }
  }

  return (
    <div className='w-full bg-white px-20 py-10 border-[1.3px] border-b-sidebar-bg '>
      {/* staff and events */}
      <div className='flex items-end w-full gap-8'>
        <div className='flex flex-col flex-1'>
          <SearchableDropdown label='Staffs' options={staffOptions} onSelect={(attendee) => handleSelect('attendee', attendee)} />
        </div>

        {/* events */}
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Events'
            options={eventOptions}
            onSelect={(value) => handleSelect('event', value)}
          />
        </div>
      </div>

      {/* session and enroll */}
      <div className='flex items-end w-full gap-6 py-4'>
        <div className='flex flex-col w-[48%]'>
          <CustomDropdown
            label='Session'
            options={sessionOptions}
            onSelect={(value) => handleSelect('session', value)}
          />
        </div>
        {/* btn */}
        <div className='ml-2'>
          <NormalBtn text='Enroll' type='primary' onClick={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default EnrollStaffForm