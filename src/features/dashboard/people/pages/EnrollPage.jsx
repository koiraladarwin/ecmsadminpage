import React from 'react'
import PeopleScreenHeader from '../components/PeopleScreenHeader'

function EnrollPage() {
  return (
    <>
      <div className='w-full px-20 '>
        <PeopleScreenHeader title='Enrollment' showForm={false} showBtn={false} />
      </div>
    </>
  )
}

export default EnrollPage