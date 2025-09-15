import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import AddAttendeeForm from '../components/form/AddAttendeeForm'
import PeopleDisplay from '../components/PeopleDisplay'

function StaffAttendeePage() {
  const { peopleId } = useParams()
  const [showForm, setShowForm] = useState(false)

  return (
    <div className='w-full lg:px-20 px-5'>
      <Header title={showForm ? 'Add a New Staff/Attendee' : "Staffs/Attendees-ALL"} download={true} showForm={showForm} />
      {
        showForm ?
          <AddAttendeeForm />
          :
          <>
            <PeopleDisplay showForm={setShowForm}/>
          </>
      }

    </div>
  )
}

export default StaffAttendeePage