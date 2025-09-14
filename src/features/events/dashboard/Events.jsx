import React from 'react'
import NavBar from './components/NavBar'
import TaskBar from './components/TaskBar'
import {FaPlus} from "react-icons/fa"
import { Link } from 'react-router-dom'
// import  {NewEvent}  from './NewEvent'
export default function Events() {
  return (
    <>
      <div className='flex min-h-screen bg-[#e1d0f0]'>
        <div className='flex flex-1'>
          <TaskBar />
        </div>
        <div class='w-full'>
          <NavBar />

          <div className='flex items-center justify-between mt-10 pl-20 pr-20'>
            {/* <h1 className='text-2xl font-bold'></h1> */}

            <div className='flex '>
                <button className='border px-5 py-1'>
                    ALL
                </button>
                <button className='border px-5'>
                    PAST
                </button>
                <button className='border px-5'>
                    ON GOING
                </button>
                <button className='border px-5'>
                    UPCOMING
                </button>

            </div>

            <div className=''>
                    <span> Event Categories</span>
                </div>

            <button className='bg-[#772a92] text-white px-4 py-2 rounded-3xl flex items-center gap-2'>
               <FaPlus /> 
                CreateEvent    {/* + sign halna baki xa */}
            </button>

            
          </div>

          <hr  className=' ml-20 mr-20 m-10 border-gray-400 border-2'/>

        
            <div className='box-border m-20 p-10 border-gray-500 border-2 bg-white text-center'>

                <h1 className='text-3xl font-bold mt-2'> Welcome! Lets create your first event </h1>
                <p className='mt-5'>Let's create your first event and get things rolling. This is your space to plan,
                    organize, and bring your ideas to life. Click below to get started and make something great!
                </p>

            <Link to="/NewEvent">
                <button className='flex px-4 py-2 rounded-3xl gap-2 mt-5 mx-auto bg-[#f91111] '>
                    <FaPlus /> Create your 1st Event
                </button>
            </Link>
            
        </div>

        </div>

      </div>
    </>
  )
}

