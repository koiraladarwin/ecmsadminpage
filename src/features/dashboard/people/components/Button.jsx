import React from 'react'
import { FiPlus } from 'react-icons/fi'


function Button({ text, type, navigate }) {
  const styles = {
    primary: 'bg-sidebar-hover text-white hover:bg-purple-500',
    secondary: 'bg-white text-black hover:bg-gray-500 hover:text-white',
    danger: 'bg-buttonred text-white hover:bg-red-400 font-bold'
  }
  return (
    <div>
      <button className={`flex items-center gap-2 px-4 py-1  rounded-full hover:bg-gray-400 transition ${styles[type]}`} onClick={() => navigate?.("/people/staff")}>
        <FiPlus size={18} />
        {text}
      </button>
    </div>
  )
}

export default Button
