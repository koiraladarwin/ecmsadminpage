import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import { IoEye } from 'react-icons/io5'
import { LiaWhatsapp } from 'react-icons/lia'
import { MdOutlineMail } from 'react-icons/md'

const PeopleDisplay = ({showForm}) => {
  return (
    <div className='w-full'>
      <div className='w-full flex justify-between'>
        <div className='flex bg-white rounded-tl-xl rounded-tr-xl border-l border-t border-r border-gray-800 border-solid'>
          <button className=' ps-7 pe-14 py-1 bg-sidebar-hover text-white font-semibold rounded-tl-xl rounded-tr-xl'>Staffs</button>
          <button className={'ps-4 pe-8 py-1 font-semibold'}>Attendees</button>
        </div>
        <div className='flex gap-3'>
          <button className={'flex items-center gap-1 px-2 h-[25px] pe-5 font-semibold rounded-full transition text-xs text-white bg-sidebar-hover cursor-pointer'} onClick={() => showForm(true)}>
            <FiPlus size={12} />
            <span className='hidden md:block'>
              Add Staff/Attendee
            </span>
          </button>
          <button className={'flex items-center gap-1 px-2 h-[25px] pe-5 font-semibold rounded-full transition text-xs text-black bg-white border border-gray-800 border-solid cursor-pointer'}>
            <FiPlus size={12} />
            <p className='hidden md:block'>
              Import <span className='text-[10px]'>(csv file only)</span>
            </p>
          </button>
        </div>
      </div>
      <div className='w-full bg-white border border-gray-800 border-solid rounded-sm py-8 px-12'>
        <div className='w-full flex flex-col md:flex-row justify-between border-b border-gray-800 border-solid pb-7 items-center'>
          <div className="relative w-fit">
            <input
              type="text"
              placeholder="Search for staffs..."
              className="rounded-xs focus:outline-none text-md"
              style={{ padding: '2px 15px 2px 10px', border: '1.9px solid rgba(128,128,128,0.3)' }}
            />
            <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <span className='underline'>Download QR</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-2 gap-5'>
          {
            Array.from({ length: 9 }, (_, i) => i).map(item => (
              <div className='w-full flex flex-col rounded-xl shadow-md shadow-black/10 pt-5 border border-gray-800/10 border-solid'>
                <div className='flex gap-3 border-b-2 border-gray-800/10 border-solid ps-5 pb-5'>
                  <img
                    src="/placeholder.jpg"
                    alt="Profile"
                    className="w-14 h-14 rounded-full border-2 border-sidebar-hover object-cover"
                  />
                  <div className='flex flex-col'>
                    <div className='flex flex-col -space-y-1'>
                      <span className='text-sm font-semibold'>Mr. Carlos Cole</span>
                      <span className='text-gray-800/50 font-semibold text-xs text-semibold'>Risk Analyst</span>
                    </div>
                    <span className='text-sm font-medium text-gray-500'>Biz Tech Pvt. Ltd.</span>
                  </div>
                </div>
                <div className='py-3 flex justify-center'>
                  <div className='w-fit flex gap-2'>
                    <IoEye className='text-2xl text-gray-800/30 cursor-pointer' />
                    <LiaWhatsapp className='text-2xl text-gray-800/30 cursor-pointer' />
                    <MdOutlineMail className='text-2xl text-gray-800/30 cursor-pointer' />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PeopleDisplay