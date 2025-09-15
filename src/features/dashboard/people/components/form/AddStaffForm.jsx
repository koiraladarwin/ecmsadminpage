import React, { useState } from 'react'
import NormalBtn from '../NormalBtn'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function AddStaffForm({ form, onClick, showForm }) {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSave = async (data) => {
    showForm(false);
  };

  const onSaveAndNew = (data) => {
    navigate("/people");
  };

  return (
    <div className="w-full flex justify-center items-center py-10 pb-15 ">
      <form onSubmit={e => e.preventDefault()} className="w-full bg-white p-6 sm:p-10 rounded-sm shadow-md border-[1.4px] border-bg-sidebar-bg flex flex-col gap-6">

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
          <input type="text" className="border rounded-sm p-2 mt-1 w-full outline-none"
            {...register("fullName", {
              required: "Full Name is required",
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "full name contains only alphabets"
                ,
              },
            })}
          />
          {errors.fullName && <p className="text-red-500">{errors.fullName.message}</p>}
        </div>

        {/* Category, Tag, mobile */}
        {/* Category */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex flex-col flex-1">
            <label className="font-bold text-sidebar-bg">
              Choose Category
            </label>
            <select
              {...register("category")}
              className="border rounded-sm p-2 mt-1 w-full focus:outline-none"
            >
              <option value="">Select Category</option>
              <option value="staff">staff</option>
              <option value="attendee">attendee</option>
            </select>
          </div>

          {/* Tag */}
          <div className="flex flex-col flex-1">
            <label className="font-bold text-sidebar-bg">
              Choose Tag <span className="text-sidebar-bg">*</span>
            </label>
            <select
              className="border rounded-sm p-2 mt-1 w-full focus:outline-none"
              {...register("tag", { required: "Tag is required" })}
            >
              <option value="">Select tag</option>
              <option value="tag-1">TAG1</option>
              <option value="tag-2">TAG2</option>
              <option value="tag-3">TAG3</option>
            </select>
            {errors.tag && <p className="text-red-500 text-sm mt-1">{errors.tag.message}</p>}
          </div>

          {/* mobile */}
          <div className="flex flex-col flex-1">
            <label className="font-bold text-sidebar-bg">
              Mobile Number <span className="text-sidebar-bg">*</span>
            </label>
            <input type="text" className="border rounded-sm p-2 mt-1 w-full outline-none"
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "should be number and 10 digits",
                },
              })}
            />
            {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
          </div>


        </div>


        {/* Email */}
        <div className="flex flex-col">
          <label className="font-bold text-sidebar-bg">
            Email Address <span className="text-sidebar-bg">*</span>
          </label>
          <input type="email" className="border rounded-sm p-2 mt-1 w-full outline-none"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        {/* upload photo */}
        <div className="flex  items-center gap-2">
          <label className="font-bold text-sidebar-bg">Upload Photo</label>
          <input
            type="file"
            className="border rounded-sm  mt-1 w-[30%] outline-none"
            {...register("photo")}
          />
        </div>

        {/* btns */}
        <div className='flex gap-6 flex-col md:flex-row'>
          <NormalBtn text="Save" type='primary' onClick={handleSubmit(onSave)} />
          <NormalBtn text="Save & Add New" type='primary' onClick={handleSubmit(onSaveAndNew)} />
        </div>
      </form>
    </div>
  )
}

export default AddStaffForm
