import React from 'react'
import Button from './Button'

function AddAttendeesCard() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center bg-white p-6 border-1 border-bg-sidebar-hover rounded-lg mx-20 my-5 shadow-md py-10 text-center gap-6">
        <h3 className="text-2xl font-bold">Add Your Team & Attendees</h3>
        <p className="text-gray-600 text-center px-45">
          Bring your team and audience on board! Add staff or participants to manage your events smoothly, collaborate better, and keep everyone connected in one place.
        </p>
        <Button text="Add Team & Attendees" type="danger" />
      </div>
    </div>
  )
}

export default AddAttendeesCard
