import SalesTicketForm from "../components/form/SalesTicketForm"
import FinanceScreenHeader from "../components/FinanceHeader";
import EventDropdown from "../components/EventDropdown";
import { useState } from "react";



function FinancePage() {
  const [eventId, setEventId] = useState(null);
  const [attendeeSearch, setAttendeeSearch] = useState("");
  console.log("current eventid: ", eventId);
  return (
    <div className="pt-5 px-20 pb-5">
      <FinanceScreenHeader title="Sale Ticket" showBtn={false} showForm={false} />
      <div className="pt-5">

        <EventDropdown onConfirm={setEventId} attendeeSearch={attendeeSearch} onAttendeeSearch={setAttendeeSearch} />
        { eventId && <SalesTicketForm eventId={eventId} attendeeSearch={attendeeSearch}/>}
      
      </div>
    </div>
  )
}

export default FinancePage