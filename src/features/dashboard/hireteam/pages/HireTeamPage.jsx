import React from 'react'
import { useState } from 'react';

import useHireTeam from '../../../../hooks/Use-HireTeam';
import { OrbitProgress } from 'react-loading-indicators';
import DropDown from '../components/DropDown';
import SelectSession from '../components/SelectSession';
import HiringDetailCard from '../components/HiringDetailCard';

function HireTeamPage() {

  const hireData = useHireTeam();

  if(hireData.length === 0) return(
        <div className="flex justify-center items-center min-h-screen">
            <OrbitProgress
                variant="split-disc"
                dense
                color="#800080"
                size="large"
            />
        </div>
    )

  return (
    <div className='min-h-screen'>
      <div className='pt-12 pl-15 text-xl font-light'>
        <h1>Hire Check-In Team</h1>
      </div>

      <hr className="mx-15 mt-5 border-1 border-textgray" />

      <div className='border-box bg-white mx-15 mt-5 rounded-xl p-10 lg:pl-10 lg:pr-20  border-textgray'>

        <div className='flex justify-end items-center'>
          <h1 className='font-light text-sm' >
            <span className='text-lg font-bold mr-4'>Rates</span>   Nrs. 2000 + 13% VAT per Scanner per Session
          </h1>
        </div>

      <hr className=" my-1 border-1 border-textgray" />

      
        

        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-20 mt-4 gap-4'>
          <div>
            <h1>Choose Event</h1>
            <DropDown/>
          </div>

          <div>
            <h1>Select Session</h1>

            <div className='mt-4'>
              <SelectSession/>
            </div>
          </div>
        </div>
        
      <div>
        <button className='text-lg px-4 py-1 sm:mt-4 rounded-full text-white bg-buttonpurple'>Confirm</button>
      </div>

      <div >
        <h1 className='text-lg text-buttonpurple font-bold my-4'>Hiring Details: </h1>          
        <HiringDetailCard/>
      </div>

        <hr className=" my-4 border-1 border-textgray" />
        
        <div className='flex flex-col lg:flex-row lg:items-center space-x-4  w-full'>

            <h1 className='text-lg text-buttonpurple font-bold my-4'>
              Upload Payment Proof
            </h1>

          <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row lg:space-x-4 w-full lg:w-auto gap-4'>

            <button 
              className='text-gray-400 px-12  border rounded-full'>
                Choose File
            </button>
            
            <button 
              className='text-lg px-4 py-1  rounded-full text-white bg-buttonpurple'>
                Hire now
            </button>

          </div>

        </div>



      </div>
    </div>
  )
}

export default HireTeamPage