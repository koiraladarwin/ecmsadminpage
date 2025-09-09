import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav className='bg-slate-800 w-full h-16'>
        <div className='w-full h-full  flex justify-end items-center '>
          <Link to='/' className='text-white font-semibold hover:text-orange-500 mr-10 '>Logout</Link>
        </div>
      </nav>
    </>
  )
}

export default NavBar