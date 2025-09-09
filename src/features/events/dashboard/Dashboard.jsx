import React from 'react'
import NavBar from './components/NavBar'
import TaskBar from './components/TaskBar'

export default function Dashboard() {
  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <NavBar />
        <div className='flex flex-1'>
          <TaskBar />
          <div className='flex-1 p-6 bg-gray-100 overflow-auto'>
            <h1 className='text-2xl font-bold'>Dashboard</h1>
          </div>
        </div>

      </div>
    </>
  )
}

