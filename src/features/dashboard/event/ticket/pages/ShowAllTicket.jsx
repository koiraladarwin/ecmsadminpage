import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import useTicket from "../../../../../hooks/Use-ticket-list";
import TicketCard from "../components/TicketCard";

export default function ShowAllTicket() {
    const ticket = useTicket();


    return (
        <div className="min-h-screen">
            <div className="flex items-center justify-between pt-10 px-20 flex-col lg:flex-row gap-4">
                <div className="space-y-2">
                    <h1 className="text-xl ">Tickets</h1>
                </div>


                <NavLink to="/events/createticket" >
                    <button className="bg-[#772a92] text-white px-4 py-1 rounded-3xl flex items-center gap-2 text-xl">
                        <FaPlus />
                        Add Ticket
                    </button>
                </NavLink>
            </div>

            <hr className="ml-20 mr-20 m-10 border-gray-400 border-1" />

            <div className='box-border m-20 mt-5 px-5 pt-5 pb-30 border-buttonpurple rounded-lg border-2 bg-white text-center overflow-x-scroll'>
                <>
                    {ticket.map((ticket, index) => (
                        <TicketCard
                            key={index} {...ticket}
                        />
                    ))}
                </>
            </div>

        </div>
    )
}