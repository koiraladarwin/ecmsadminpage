import React from 'react'
import { useNavigate } from 'react-router-dom'
import CreateCategoryButton from './CreateCategoryBtn'

function AddCategoryCard() {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center w-full pb-20">
      <div className="flex flex-col justify-center w-full items-center bg-white  border-1 border-bg-sidebar-hover rounded-md  shadow-md py-10 text-center gap-6">
        <h3 className="text-3xl font-extrabold text-sidebar-bg ">What are events categories?</h3>
        <p className="text-sidebar-bg text-center text-lg w-[80%]">
          Use event categories to organize your events in ECMS. This is most useful when you are running multi-day events, simultaneous events for different groups of attendees or are simply promoting events for different artists.
        </p>
        <CreateCategoryButton text="How to use events categories?" type="danger" navigate={navigate} />
      </div>
    </div>
  )
}

export default AddCategoryCard
