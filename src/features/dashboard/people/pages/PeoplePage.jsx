import React from 'react'
import Header from '../components/Header'
import AddAttendeesCard from '../components/AddAttendeesCard'

function PeoplePage() {
  return (
    <>
      <Header title="Staffs/Attendees" />
      <div className="w-full flex justify-center lg:justify-end px-4 sm:px-6 py-2">
        <p className="underline text-gray-600 text-sm sm:text-base lg:pe-10 xl:pe-12 pe-0">
          Download Format
        </p>
      </div>
      <AddAttendeesCard />
    </>
  )
}

export default PeoplePage
