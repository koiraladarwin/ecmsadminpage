import { OrbitProgress } from "react-loading-indicators"

function EnrollList({ data, type, isLoading }) {
  const showLoader = isLoading || !data;
  return (
    <div className="w-full overflow-x-auto relative ">
      {
        showLoader && <div className='absolute inset-0 bg-gray-100 opacity-25 z-50 flex items-center justify-center  min-h-35 '>
          <OrbitProgress color="#800080" size="medium" />
        </div>
      }
      <table className="w-full text-left ">
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
