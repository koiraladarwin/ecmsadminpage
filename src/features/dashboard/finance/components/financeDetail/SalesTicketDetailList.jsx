import ToggleDesignBtn from '../form/ToggleDesignBtn'


function SalesTicketDetailList({ data, onStatusChange }) {

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full text-left">
        {/* table header */}
        <thead className='text-[0.8rem]'>
          <tr className="border-b-1">
            <th className="px-1 py-2">ID</th>
            <th className="px-1 py-2">Type</th>
            <th className="px-1 py-2">Full Name</th>
            <th className="px-1 py-2">Company/Organization</th>
            <th className="px-1 py-2">Mobile NO.</th>
            <th className="px-1 py-2">Amount</th>
            <th className="px-1 py-2">Status</th>
          </tr>
        </thead>

        {/*table body */}
        <tbody className='text-[0.85rem] '>
          {data?.map((item) => (
            <tr key={`${item.ticket_id}-${item.attendee_id}`} className='border-b-1 '>
              <td className="px-1 py-2">{item.attendee_tag}-{item.auto_id}</td>
              <td className="px-1 py-2">{item.ticket_name}</td>
              <td className="px-1 py-2">
                <div className="flex items-center gap-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{item.name}</span>
                </div>
              </td>
              <td className="px-1 py-2">{item.company}</td>
              <td className="px-1 py-2">{item.phone_number}</td>
              <td className="px-1 py-2">{item.amount}</td>
              <td className="px-1 py-2">

                <ToggleDesignBtn 

                  status={item.status}
                  name={item.name}
                  attendee_id={item.attendee_id}
                  ticket_id={item.ticket_id}
                  
                  onStatusChange={(ticketId, newStatus) => 
                    onStatusChange(ticketId, item.attendee_id, newStatus)
                  }
                />
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SalesTicketDetailList
