import React, { useState } from 'react'
import NormalBtn from '../NormalBtn'

function AddStaffForm({form, onClick}) {
  const [tag, setTag] = useState('')

  return (
    <div className="w-full flex justify-center items-center py-10  min-h-screen">
      <div className="w-full bg-white p-6 sm:p-10 rounded-lg shadow-md flex flex-col gap-6">

        {/* Attendee Type */}
        <div className="flex flex-col md:flex-row gap-6 justify-end">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="attendeeType"
              value="individual"
              checked={form === 'individual'}
              onChange={() => onClick('individual')}
            />
            Individual
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              name="attendeeType"
              value="company"
              checked={form === 'company'}
              onChange={() => onClick('company')}
            />
            Company / Organization
          </label>
        </div>

        {/* Full Name */}
        <div className="flex flex-col">
          <label className="font-bold text-sidebar-bg">
            Full Name <span className="text-sidebar-bg">*</span>
          </label>
          <input type="text" className="border rounded-md p-2 mt-1 w-full outline-none" />
        </div>

        {/* Category, Tag, Upload Photo */}
        {/* Category */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex flex-col flex-1">
            <label className="font-bold text-sidebar-bg">Default Category</label>
            <input
              type="text"
              value="Attendees"
              disabled
              className="border rounded-md p-2 mt-1 text-gray-600 cursor-not-allowed w-full outline-none"
            />
          </div>

          {/* Tag */}
          <div className="flex flex-col flex-1">
            <label className="font-bold text-sidebar-bg">
              Choose Tag <span className="text-sidebar-bg">*</span>
            </label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="border rounded-md p-2 mt-1 w-full"
            >
              <option value="">Select tag</option>
              <option value="tag-1">TAG1</option>
              <option value="tag-2">TAG2</option>
              <option value="tag-3">TAG3</option>
            </select>
          </div>

          {/* mobile */}
          <div className="flex flex-col flex-1">
            <label className="font-bold text-sidebar-bg">
              Mobile Number <span className="text-sidebar-bg">*</span>
            </label>
            <input type="text" className="border rounded-md p-2 mt-1 w-full outline-none" />
          </div>


        </div>


        {/* Email */}
        <div className="flex flex-col">
          <label className="font-bold text-sidebar-bg">
            Email Address <span className="text-sidebar-bg">*</span>
          </label>
          <input type="email" className="border rounded-md p-2 mt-1 w-full outline-none" />
        </div>

        {/* upload photo */}
        <div className="flex flex-col flex-1">
          <label className="font-bold text-sidebar-bg">Upload Photo</label>
          <input
            type="file"
            className="border rounded-md  mt-1 w-full outline-none"
          />
        </div>

        {/* btns */}
        <div className='flex gap-6 flex-col md:flex-row'>
          <NormalBtn text="Save" type='primary' />
          <NormalBtn text="Save & Add New" type='primary' />
        </div>
      </div>
    </div>
  )
}

export default AddStaffForm
