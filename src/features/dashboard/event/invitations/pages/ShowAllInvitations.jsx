import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AllInvitationCard from "../components/AllInvitationCard";
import useInvitation from "../../../../../hooks/Use-invitation-list";


export default function ShowAllInvitations() {
    const invitation = useInvitation();

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
                    {invitation.map((invitation, index) => (
                        <AllInvitationCard
                            key={index} {...invitation}
                        />
                    ))}


                </>
            </div>
        </div>
    )
}