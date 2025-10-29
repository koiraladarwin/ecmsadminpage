import { IoSearch } from "react-icons/io5";
import useGeneralInvitation from "../../../../../hooks/Use-generalInvitation-list"
import GeneralInvitationCard from "../components/GeneralInvitationCard";
import GeneralInvitation from "../components/GeneralInvitation";
import { useEffect, useState } from "react";
import useInvitation from "../../../../../hooks/Use-invitation-list";
import useAllAttendee from "../../../../../hooks/Use-attendee";
import { useNavigate, useParams } from "react-router-dom";
import AllAttendeeCard from "../components/AttendeeCard";
import { formatDateTimeRange } from "../components/EventDetailCard";

export default function ViewGeneralInvitations()
{
    const navigate = useNavigate();
    const {data: eventInvitationDetails, isLoading: eventInvitationLoading} = useInvitation();
    const {data: allAttendees, isLoading: attendeesLoading} = useAllAttendee();
    const {eventId, inviteeId} = useParams();

    const currentEvent = eventInvitationDetails?.find(item => item.event.id === eventId);
    const invitations = currentEvent?.invitation || [];

    const categories = ["general", "vip", "guest"];

    const [activeTab, setActiveTab] = useState(inviteeId?.toLowerCase() || "general");

    useEffect(() => {
        if(inviteeId && categories.includes(inviteeId.toLowerCase()))
        {
            setActiveTab(inviteeId.toLowerCase());
        }
    },[inviteeId]);

    const activeInvitations = invitations.filter(inv=> inv.invitee_category_tag?.toLowerCase().includes(activeTab));


    const attendees = 
        activeInvitations.flatMap(inv =>
            (inv.attendees || []).map(item => {
            const attendeeData = allAttendees?.find(a => a.id === item.attendee_id);
            return attendeeData || null;
        })
    ).filter(Boolean) || [];


    return(
        <div>
            <div className="flex items-center justify-between pt-10 px-20  gap-2 ">
                <h1 className="text-xl flex items-center gap-2">View Invitations</h1>
            </div>
                <hr className=" mx-4 md:mx-20 my-5 border-gray-400 border-1 " />

            <div className='box-border mx-20 my-10 px-20 py-10 border-gray-500 border-2 bg-white rounded-xl'>

                <div className="flex flex-col lg:flex-row gap-10 justify-between ">
                    <div>
                        <h1 className="font-bold pt-2">General Invitation</h1>
                        {/* Search bar */}
                        <div className="relative">
                            <form className="absolute flex items-center">
                                <input type="text" placeholder="Search for invitation" className="placeholder:pl-2 placeholder:text-sm border-1 "/>
                                <IoSearch color="grey"  className="flex justify-end ml-42 absolute "/>
                            </form>
                        </div>
                    </div>

                    <div className="text-left lg:text-right">
                        {currentEvent ? (
                            <div >
                                <p>{currentEvent?.event?.name}</p>
                                <span>{formatDateTimeRange(currentEvent.event?.start_time, currentEvent.event?.end_time)}</span>
                                <p>Venue: {currentEvent?.event?.location}</p>
                            </div>
                        ) : <p>No Invitaions selected</p>
                            
                        }

                    </div>

                </div>

                <div className="w-fit bg-white flex flex-wrap sm:flex-col md:flex-col lg:flex-row items-stretch mt-6  rounded-tl-xl rounded-tr-xl border-l border-t border-r border-gray-800 border-solid overflow-x-auto md:overflow-visible scrollbar-hide">
                    {
                        
                        categories.map((tab) => (
                            <button 
                                key={tab}
                                className={`px-5 py-2 font-semibold rounded-tl-xl border-r rounded-t-xl ${
                                    activeTab === tab 
                                    ? "bg-sidebar-hover text-white"
                                    : "text-gray-700"   
                                }`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    navigate(`/event/${eventId}/invitations/${tab}`);
                                }
                                }
                            >
                                {tab.toUpperCase()}
                            </button>
                        ))
                    }
                </div>
        
                <hr className="border-1 border-textgray" />

                <div>
                
                    {attendees.length > 0 ? (
                    <AllAttendeeCard attendees={attendees} isLoading={attendeesLoading} />
                        ) : (
                            <p className="text-gray-500 p-4 text-center">No attendees found for this category.</p>
                        )}
                    
                </div>

            </div>


            
        </div>
    )
}