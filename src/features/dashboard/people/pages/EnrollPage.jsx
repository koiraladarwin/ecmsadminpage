import React, { useState } from 'react'
import PeopleScreenHeader from '../components/PeopleScreenHeader'
import FilterTab from '../components/FilterTab'

function EnrollPage() {
  const [activeTab, setActiveTab] = useState('Staffs')
  return (
    <>
      <div className='w-full px-20 '>
        <PeopleScreenHeader title='Enrollment' showForm={false} showBtn={false} />
        <FilterTab filterByTitle1="Staffs" filterByTitle2="Attendees" activeTab={activeTab} setActiveTab={setActiveTab}
        />
      </div>
    </>
  )
}

export default EnrollPage