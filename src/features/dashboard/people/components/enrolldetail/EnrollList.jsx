import React from 'react'

function EnrollList({ data }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left">
        {/* table header */}
        <thead>
          <tr className="border-b-1">
            <th className="p-3">ID</th>
            <th className="p-3">Attendees</th>
            <th className="p-3">Event</th>
            <th className="p-3">Session</th>
            <th className="p-3">Entry</th>
          </tr>
        </thead>

        {/*table body */}
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="p-3">{item.attendee.id}</td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.attendee.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{item.attendee.name}</span>
                </div>
              </td>
              <td className="p-3">{item.event}</td>
              <td className="p-3">{item.session}</td>
              <td className="p-3">{item.entry}</td>
              <td className='underline p-1 cursor-pointer'>Modify</td>
              <td className='underline p-1 cursor-pointer'>Remove</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EnrollList
