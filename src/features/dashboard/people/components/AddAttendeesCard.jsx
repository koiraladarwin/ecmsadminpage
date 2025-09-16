import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

function AddAttendeesCard() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center w-full pb-20">
      <div className="flex flex-col justify-center w-full items-center bg-white  border-1 border-bg-sidebar-hover rounded-md  shadow-md py-10 text-center gap-6">
        <h3 className="text-2xl font-bold">Add Your Team & Attendees</h3>
        <p className="text-gray-600 text-center w-[60%]">
          Bring your team and audience on board! Add staff or <br />
          participants to manage your events smoothly, collaborate<br />
          better, and keep everyone connected in one place.
        </p>
        <Button text="Add Team & Attendees" type="danger" navigate={navigate} />
      </div>
    </div>
  )
}

export default AddAttendeesCard
