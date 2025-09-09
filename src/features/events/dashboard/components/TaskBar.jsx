import React from 'react'
import { Link } from 'react-router-dom';

const TaskBar = () => {
  return (
    <>
      <div className='w-64 h-100vh bg-slate-800 flex flex-col items-center'>
        <div className="w-12 h-12 rounded-full bg-orange-600 flex justify-center items-center mb-6 mt-6">
          <h1 className="text-white font-bold">U</h1>
        </div>

        <div className='flex flex-col space-y-5 px-3 w-full text-white'>
          <div className='w-full text-center rounded bg-slate-200 text-orange-400 py-2'><Link>Home</Link></div>
          <div className='w-full text-center rounded hover:bg-slate-200 hover:text-orange-400 py-2'><Link>Event</Link></div>
          <div className='w-full text-center rounded hover:bg-slate-200 hover:text-orange-400 py-2'><Link>Import</Link></div>
        </div>

      </div>
    </>
  )
}

export default TaskBar