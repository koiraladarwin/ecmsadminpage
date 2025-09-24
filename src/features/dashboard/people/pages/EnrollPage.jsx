import React, { useState } from 'react'
import ScreenHeader from '../components/PeopleScreenHeader'
import FilterTab from '../components/FilterTab'
import EnrollStaffForm from '../components/form/EnrollStaffForm'
import EnrollAttendeeForm from '../components/form/EnrollAttendeeForm'


function EnrollPage() {
  const [activeTab, setActiveTab] = useState('Staffs')
  return (
    <>
      <div className='w-full lg:px-20 pb-20 '>
        <ScreenHeader title='Enrollment' showForm={false} showBtn={false} />
        <FilterTab filterByTitle1="Staffs" filterByTitle2="Attendees" activeTab={activeTab} setActiveTab={setActiveTab}
        />
        {
          activeTab == 'Staffs' ? <EnrollStaffForm /> : <EnrollAttendeeForm />
        }


      </div>
    </>
  )
}

export default EnrollPage
