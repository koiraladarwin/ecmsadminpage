import React from 'react'

function NormalBtn({ text, type, onClick }) {
  const styles = {
    primary: 'bg-sidebar-hover text-white hover:bg-purple-500',
    secondary: 'bg-white text-black hover:bg-gray-500 hover:text-white',
    danger: 'bg-red-700 text-white hover:bg-red-400 font-bold'
  }
  return (
    <div>
      <button className={`flex items-center gap-2 px-4 py-1  rounded-full hover:bg-gray-400 transition ${styles[type]}`} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default NormalBtn
