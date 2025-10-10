import EventDetailCard from "../../invitations/components/EventDetailCard";
import TicketsCard from "./TicketsCard";
import img from '../../../../../../src/assets/cargoDay.png'

export default function TicketCard({
    eventname,
    startdate,
    starttime,
    enddate,
    endtime,
    venue,
    organizer,
    generaladmission,
    platiniumticket,
    premiumplusticket,
    premiumticket,

}) {

    return (
        <div className="flex justify-between flex-col gap-2 lg:flex-col box-border p-2 m-2 border-none rounded-lg md:shadow-2xl px-4 py-6  ">
            <EventDetailCard
                img={img}
                eventname={eventname}
                startdate={startdate}
                starttime={starttime}
                enddate={enddate}
                endtime={endtime}
                venue={venue}
                organizer={organizer}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <TicketsCard
                    count={generaladmission}
                    link="/event/ticketgeneralinvitation"
                    title="General Admission"
                    price='8000'
                />
                <TicketsCard
                    count={platiniumticket}
                    link="/event/ticketgeneralinvitation"
                    title="Platinum Ticket"
                    price="18000"
                />
                <TicketsCard
                    count={premiumplusticket}
                    link="/event/ticketgeneralinvitation"
                    title="Premium Plus Ticket"
                    price="12000"
                />
                <TicketsCard
                    count={premiumticket}
                    link="/event/ticketgeneralinvitation"
                    title="Premium Ticket"
                    price="10000"
                />
            </div>
        </div>
    )
}