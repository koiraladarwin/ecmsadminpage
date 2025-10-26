function EnrollList({ data, type }) {
  return (
    <div className="w-full overflow-x-auto ">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b-1">
            <th className="p-3">ID</th>
            <th className="p-3">{type === "attendee" ? 'Attendees' : 'Staffs'}</th>
            <th className="p-3">Event</th>
            <th className="p-3">Session</th>
            {type === 'attendee' && <th className="p-3">Entry</th>}
          </tr>
        </thead>

        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td className="p-3">{item.auto_id}</td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <img
                    src={'/placeholder.jpg' || item.attendee_image}
                    alt={item.attendee_name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{type === "attendee" ? item.attendee_name : item.staff_name}</span>
                </div>
              </td>
              <td className="p-3">{item.event_name}</td>
              <td className="p-3">{type === "attendee" ? item.session_name : item.activity_name}</td>
              {type === "attendee" && <td className="p-3">{item.entry}</td>}
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
