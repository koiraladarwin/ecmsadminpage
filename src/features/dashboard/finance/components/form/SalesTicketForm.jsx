import { useEffect, useState } from 'react'

import SalesTicketDetailList from '../financeDetail/SalesTicketDetailList'
import useTicketSalesData from '../../../../../hooks/Use-sales-ticket-list'

import { OrbitProgress } from 'react-loading-indicators'

function SalesTicketForm({eventId, attendeeSearch}) {

  const [salesData, setSalesData] = useState([]);

  const {data, isLoading: loading, refetch} = useTicketSalesData(eventId)

  useEffect(() => {
    
      setSalesData([]);
    
  }, [eventId]);

  useEffect(() => {
    if(data)
    {
      console.log("Fetched Tickets: ",data);
      setSalesData(data?.length ? data : []);
    }
  }, [data]);

  const handleStatusChange = (ticket_id, attendee_id, newStatus) => {
    setSalesData((prev) => 
      prev.map((item) => 
        item.ticket_id === ticket_id && item.attendee_id === attendee_id ? {...item, status: newStatus} : item
    ));
  }

// filter ticket by attendee name
  const filteredTickets = salesData.filter((ticket) => 
    ticket.name.toLowerCase().includes((attendeeSearch || "").toLowerCase())
  )


  return (
    <div className='w-full bg-white px-10 py-10 border-[1.3px] border-b-sidebar-bg space-y-6'>

      {loading ? (
        <div className="w-full h-64 flex justify-center items-center">
          <OrbitProgress
            variant="split-disc"
            dense
            color="#800080"
            size="small"
          />
        </div>
      ) : filteredTickets.length > 0 ? (
        <SalesTicketDetailList data={filteredTickets} onStatusChange={handleStatusChange}/>
      ): (
        <p>No Sales tickets found</p>
      )}
    </div>
  )
}

export default SalesTicketForm
