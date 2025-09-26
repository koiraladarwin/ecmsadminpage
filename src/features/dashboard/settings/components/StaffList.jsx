import React from 'react'

export default function StaffList({ id,name,image}) {
  return (
    <div className="w-full overflow-x-auto flex-col lg:flex-row">
      <table className="w-full text-left">
        <tbody>
          
            <tr>
              <td className="p-3">{id}</td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <img
                    src={image}
                    alt={name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{name}</span>
                </div>
              </td>
              <td className='underline p-1 cursor-pointer'>Sent Code</td>
              <td className='underline p-1 cursor-pointer'>Remove</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
