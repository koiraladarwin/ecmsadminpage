import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import AddAttendeeForm from '../components/form/AddAttendeeForm'
import PeopleDisplay from '../components/PeopleDisplay'
import AddAttendeesCard from '../components/AddAttendeesCard'
import AddStaffForm from '../components/form/AddStaffForm'

function StaffAttendeePage() {
  const { peopleId } = useParams()
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState("individual")

  return (
    <div className='w-full lg:px-20 px-5'>
      <Header title={showForm ? 'Add a New Staff/Attendee' : "Staffs/Attendees-ALL"} download={true} showForm={showForm} />
      {
        showForm ?
          form == 'individual' ?
            <AddStaffForm onClick={setForm} form={form}/>
            :
            <AddAttendeeForm onClick={setForm} form={form}/>
          :
          <>
            <PeopleDisplay showForm={setShowForm} />
          </>
      }

    </div>
  )
}

export default StaffAttendeePage