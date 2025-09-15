import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import AddAttendeeForm from '../components/form/AddAttendeeForm'
import PeopleDisplay from '../components/staff/attendee/PeopleDisplay'
import AddStaffForm from '../components/form/AddStaffForm'

function StaffAttendeePage() {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState("individual")
  const [activeTab, setActiveTab] = useState('staff');

  return (
    <div className='w-full lg:px-20 px-5'>
      <Header title={showForm ? 'Add a New Staff/Attendee' : "Staffs/Attendees-ALL"} download={true} showForm={showForm} />
      {
        showForm ?
          form == 'individual' ?
            <AddStaffForm onClick={setForm} showForm={setShowForm} form={form} setActiveTab={setActiveTab} />
            :
            <AddAttendeeForm onClick={setForm} showForm={setShowForm} form={form} setActiveTab={setActiveTab} />
          :
          <>
            <PeopleDisplay showForm={setShowForm} activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
      }

    </div>
  )
}

export default StaffAttendeePage