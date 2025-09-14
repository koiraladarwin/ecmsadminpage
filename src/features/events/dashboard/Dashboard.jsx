import React from 'react'
import NavBar from './components/NavBar'
import TaskBar from './components/TaskBar'

export default function Dashboard() {
  return (
    <>
      <div className='flex min-h-screen'>
        <div className='flex flex-1'>
          <TaskBar />
        </div>
        <div class='w-full'>
          <NavBar />
          <div className='flex-1 p-6 overflow-auto'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
          </div>
        </div>

      </div>
    </>
  )
}

