import React, { useState } from 'react'
import PeopleScreenHeader from '../components/PeopleScreenHeader'
import FilterTab from '../components/FilterTab'
import EnrollStaffForm from '../components/form/EnrollStaffForm'


function EnrollPage() {
  const [activeTab, setActiveTab] = useState('Staffs')
  return (
    <>
      <div className='w-full px-20 '>
        <PeopleScreenHeader title='Enrollment' showForm={false} showBtn={false} />
        <FilterTab filterByTitle1="Staffs" filterByTitle2="Attendees" activeTab={activeTab} setActiveTab={setActiveTab}
        />
        <EnrollStaffForm />

      </div>
    </>
  )
}

export default EnrollPage