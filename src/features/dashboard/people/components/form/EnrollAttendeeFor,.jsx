import React, { useState } from 'react'
import SearchableDropdown from '../SearchableDropdown'
import CustomDropdown from '../CustomDropDown'
import NormalBtn from '../NormalBtn'
import Swal from 'sweetalert2'

function EnrollAttendeeForm() {
  const attendeeOptions = [
    { id: 'STF-001', name: 'Mr. Carlos Cole' },
    { id: 'STF-002', name: 'Mr. Peter Lee' },
  ]
  const eventOptions = ['Event1', 'Event2', 'Event3']
  const sessionOptions = ['Session1', 'Session2', 'Session3']
  const entryOptions = ['Blank', 'Invitation', 'Ticket']

  const [formData, setFormData] = useState({
    attendee: null,
    event: null,
    session: null,
    entry: null,
  })


  const handleSelect = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = () => {
    if (!formData.attendee || !formData.event || !formData.session || !formData.entry) {
      Swal.fire('Please Fill all the fields!')
      return
    }
  }

  return (
    <div className='w-full bg-white px-20 py-10 border-[1.3px] border-b-sidebar-bg space-y-6'>

      {/* Attendee and Event Row */}
      <div className='flex items-end  w-full gap-6'>
        <div className='flex flex-col flex-1'>
          <SearchableDropdown
            label='Attendees'
            options={attendeeOptions}
            onSelect={(attendee) => handleSelect('attendee', attendee)}
          />
        </div>

        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Events'
            options={eventOptions}
            onSelect={(value) => handleSelect('event', value)}
          />
        </div>
      </div>

      {/* Session and Entry Row */}
      <div className='flex  w-full gap-6'>
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Session'
            options={sessionOptions}
            onSelect={(value) => handleSelect('session', value)}
          />
        </div>

        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Entry'
            options={entryOptions}
            onSelect={(value) => handleSelect('entry', value)}
          />
        </div>
      </div>

      <NormalBtn text='Enroll' type='primary' onClick={handleSubmit} />

    </div>
  )
}

export default EnrollAttendeeForm
