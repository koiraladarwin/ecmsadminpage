import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import useTicket from "../../../../../hooks/Use-ticket-list";
import { useParams } from "react-router-dom";
import { formatDateTimeRange } from "../../invitations/components/EventDetailCard";
import useAllAttendee from "../../../../../hooks/Use-attendee";
import AllAttendeeCard from "../components/AttendeeCard";

export default function TicketGeneralInvitations() {
    const { data: eventTicketDetails, isLoading: eventTicketDetailsLoading } = useTicket()
    const { data: allAttendees, isLoading: attendeesLoading } = useAllAttendee()
    const { eventId, ticketId } = useParams()
    const currentEvent = eventTicketDetails?.find(item => item.event.id === eventId)
    const tickets = currentEvent?.ticket || [];

    const ticketsByCategory = tickets.map(t => ({
        id: t.ticket_category_id,
        label: t.ticket_category_tag
    }));
    const requiredTicket = tickets.find(t => t.id == ticketId);
    const [activeTab, setActiveTab] = useState("");



    useEffect(() => {
        if (requiredTicket?.ticket_category_id) {
            setActiveTab(requiredTicket.ticket_category_id);
        } else if (tickets.length > 0 && !activeTab) {
            setActiveTab(tickets[0].ticket_category_id);
        }
    }, [requiredTicket, tickets]);

    const activeTicket = tickets.find(t => t.ticket_category_id === activeTab);

    const attendees = activeTicket?.attendees?.map((item) => {
        let attendeeExist = {}

        allAttendees?.forEach((attendee) => {
            if (item.attendee_id === attendee.id) {
                attendeeExist = attendee
            }
        })
        if (attendeeExist?.id) return attendeeExist
    })


    return (
        <div className="">
            <div className="flex items-center justify-between pt-10 px-20  gap-2 ">
                <h1 className="text-xl flex items-center gap-2">View Tickets</h1>
            </div>
            <hr className=" mx-4 md:mx-20 my-5 border-gray-400 border-1 " />

            <div className='box-border mx-20 my-10 px-20 py-10 border-gray-500 border-2 bg-white rounded-xl'>

                <div className="flex flex-col lg:flex-row justify-between gap-10">
                    <div>
                        <h1 className="font-bold pt-2">{activeTicket?.ticket_category_tag}</h1>
                        {/* Search bar */}
                        <div className="relative">
                            <form className="absolute flex items-center">
                                <input type="text" placeholder="Search for invitation" className="placeholder:pl-2 placeholder:text-sm border-1 " />
                                <IoSearch color="grey" className="flex justify-end ml-42 absolute " />
                            </form>
                        </div>
                    </div>

                    <div className="text-left lg:text-right">
                        {currentEvent ? (
                            <div>
                                <p>{currentEvent?.event?.name}</p>
                                <span>{formatDateTimeRange(currentEvent.event?.start_time, currentEvent.event?.end_time)}</span>
                                <p>Venue: {currentEvent?.event?.location}</p>
                            </div>
                        ) : <p>No ticket selected</p>}
                    </div>

                </div>

                <div className="w-fit bg-white flex flex-wrap sm:flex-col md:flex-col lg:flex-row items-stretch mt-6  rounded-tl-xl rounded-tr-xl border-l border-t border-r border-gray-800 border-solid overflow-x-auto md:overflow-visible scrollbar-hide">
                    {
                        ticketsByCategory.map((tab) => (

                            <button
                                key={tab.id}
                                className={`px-5 py-2 font-semibold rounded-tl-xl border-r whitespace-nowrap lg:rounded-t-xl ${activeTab === tab.id
                                    ? "bg-sidebar-hover text-white"
                                    : "text-gray-700"
                                    }`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))
                    }
                </div>
                <hr className="border-1 border-textgray" />

                <div>
                    {activeTab ? <AllAttendeeCard attendees={attendees} isLoading={attendeesLoading} /> : ""}
                </div>

            </div>



        </div>
    )
}