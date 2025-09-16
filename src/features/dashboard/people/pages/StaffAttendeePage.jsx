import React, { useState } from 'react'
import Header from '../components/Header'
import PeopleDisplay from '../components/staff/attendee/PeopleDisplay'
import { useLocation } from 'react-router-dom'

function StaffAttendeePage() {
  const location = useLocation()
  const data = location.state?.data
  const [activeTab, setActiveTab] = useState(data ? data : "staff");

  return (
    <div className='w-full lg:px-20 px-5 pb-10'>
      <Header title="Staffs/Attendees-ALL" download={true} showForm={false} />
      <PeopleDisplay activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
}

export default StaffAttendeePage