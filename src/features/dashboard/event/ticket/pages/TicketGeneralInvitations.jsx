import { PiGreaterThan } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import { ticket } from "../components/TicketDetail";
import { GeneralInvitation } from "../components/GeneralInvitationdetail";
import GeneralInvitationCard from "../components/GeneralInvitationCard";

export default function TicketGeneralInvitations()
{
    return(
        <div className="">
            <div className="flex items-center justify-between pt-10 pl-20 pr-20  gap-2 ">
                <h1 className="text-xl flex items-center gap-2">View Tickets <PiGreaterThan /> General Invitation</h1>
            </div>
                <hr className=" mx-4 md:mx-20 my-5 border-gray-400 border-1 " />

            <div className='box-border mx-20 my-10 px-20 py-10 border-gray-500 border-2 bg-white rounded-xl'>

                <div className="flex lg:justify-between ">
                    <div>
                        <h1 className="font-bold pt-2">General Admission</h1>
                        {/* Search bar */}
                        <div className="relative">
                            <form className="absolute flex items-center">
                                <input type="text" placeholder="Search for invitation" className="placeholder:pl-2 placeholder:text-sm border-1 "/>
                                <IoSearch color="grey"  className="flex justify-end ml-42 absolute "/>
                            </form>
                        </div>
                    </div>

                    <div className="text-left md:text-right">
                        {ticket.map((ticket,index) => (
                            <div key={index} >
                                
                                <p>{ticket.subtitle}</p>
                                <span>{ticket.startdate} {ticket.starttime} - {ticket.enddate} {ticket.endtime}</span>
                                <p>Venue: {ticket.venue}</p>
                            </div>
                        ))}

                    </div>

                </div>
                <hr className="border-1 border-textgray mt-1" />


                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    {GeneralInvitation.map((general,index) => (
                        <GeneralInvitationCard
                            key={index} {...general}              
                        />
                    ))}
                </div>

            </div>


            
        </div>
    )
}