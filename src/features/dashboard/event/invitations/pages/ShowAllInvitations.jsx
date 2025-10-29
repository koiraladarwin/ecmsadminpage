import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AllInvitationCard from "../components/AllInvitationCard";
import UseShowAllInvitation from "../../../../../hooks/Use-AllInvitation-list";
import { OrbitProgress } from "react-loading-indicators";

export default function ShowAllInvitations() {

    const {data: invitation, isLoading: eventsInvitationLoading, isError} = UseShowAllInvitation();

        const events = invitation?.map(item => ({
            
            event: item.event,
            invitations: item.invitation || []

        }))

    return (
        <div className="min-h-screen">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between pt-10 px-20">
                <div className="space-y-2">
                    <h1 className="text-xl ">Invitations</h1>
                </div>

                <NavLink to="/event/createinvitation" >
                    <button className="bg-[#772a92] text-white px-4 py-1 rounded-3xl flex items-center gap-2 text-xl">
                        <FaPlus />
                        Add Invitation
                    </button>
                </NavLink>
            </div>

            <hr className="ml-20 mr-20 m-10 border-gray-400 border-1" />

            <div className='md:px-5 pt-5 pb-20 m-20 mt-5 rounded-2xl border-buttonpurple box-border border-2 bg-white text-center overflow-x-scroll'>
                <>
                    {eventsInvitationLoading ? 
                        <>
                            <div className="flex justify-center items-center min-h-screen">
                                <OrbitProgress
                                    variant="split-disc"
                                    dense
                                    color="#800080"
                                    size="large"
                                />
                            </div>

                        </> : isError ? 
                            <>
                                <div className="flex flex-col justify-center items-center min-h-screen text-center text-red-500">
                                    <p className="text-xl font-semibold">Failed to load events!</p>
                                    <p className="text-gray-500 mt-2">Please try again later.</p>
                                </div>

                            </> : <>
                                    {events?.map((invitation) => (
                                        <AllInvitationCard
                                            key={invitation.event.id}
                                            event={invitation.event}
                                            invitations={invitation.invitations}
                                        />
                                    ))}
                                </>
                    }
                </>
                
            </div>
        </div>
    )
}