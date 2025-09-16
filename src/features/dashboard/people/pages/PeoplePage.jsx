import React from 'react'
import AddAttendeesCard from '../components/AddAttendeesCard'
import PeopleScreenHeader from '../components/PeopleScreenHeader'

function PeoplePage() {
  return (
    <div className='w-full px-14'>
      <PeopleScreenHeader title="Staffs/Attendees" />
      <div className="w-full flex justify-center lg:justify-end">
        <p className="underline text-gray-600 pb-4 text-sm sm:text-base">
          Download Format
        </p>
      </div>
      <AddAttendeesCard />
    </div>
  )
}

export default PeoplePage
