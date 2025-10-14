import EventDetailCard from "../../invitations/components/EventDetailCard";
import TicketsCard from "./TicketsCard";
import img from '../../../../../../src/assets/cargoDay.png'

export default function TicketCard({
    event,
    ticket,

}) {
    return (
        <div className="flex justify-between flex-col gap-2 lg:flex-col box-border p-2 m-2 border-none rounded-lg md:shadow-2xl px-4 py-6  ">
            <EventDetailCard
                img={img}
                eventname={event.name}
                starttime={event.start_time}
                endtime={event.end_time}
                venue={event.location}
                organizer={event.event_organizer}
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {ticket?.map((t) => {
                    return (
                        <TicketsCard
                            key={t.id}
                            count={t.attendees.length}  
                            link={`/events/${event.id}/${t.id}`}             
                            title={t.ticket_category_tag}  
                            price={t.price}
                        />
                    );
                })}
            </div>
        </div>
    )
}