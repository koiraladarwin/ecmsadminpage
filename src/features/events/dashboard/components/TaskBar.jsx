import React from 'react'
import { Link } from 'react-router-dom';

const TaskBar = () => {
  return (
    <>
      <div className='w-64 h-screen bg-slate-800 flex flex-col items-center'>
        <div className="w-12 h-12 rounded-full bg-orange-600 flex justify-center items-center mb-6 mt-6">
          <h1 className="text-white font-bold">U</h1>
        </div>

        <div className='flex flex-col space-y-10'>
          <div><Link className='block w-full px-4 py-2 rounded text-white  hover:bg-slate-200 hover:text-orange-400'>Home</Link></div>
          <div><Link className='block w-full px-4 py-2 rounded text-white hover:bg-slate-200 hover:text-orange-400'>Event</Link></div>
          <div><Link className='block w-full px-4 py-2 rounded text-white hover:bg-slate-200 hover:text-orange-400'>Import</Link></div>
        </div>

      </div>
    </>
  )
}

export default TaskBar