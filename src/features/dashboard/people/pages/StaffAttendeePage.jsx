import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import AddAttendeeForm from '../components/form/AddAttendeeForm'

function StaffAttendeePage() {
  const { peopleId } = useParams()

  return (
   <div className='w-full lg:px-28 px-5'>
   <Header title='Add a New Staff/Attendee' download={true}/>
   <AddAttendeeForm/>
   </div>
  )
}

export default StaffAttendeePage