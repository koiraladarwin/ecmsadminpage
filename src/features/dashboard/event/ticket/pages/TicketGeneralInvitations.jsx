import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { ticket } from "../components/TicketDetail";
import GeneralAdmission from "../components/GeneralAdmission";
import PlatinumTicket from "../components/PlatinumTicket";
import PremiumPlusTicket from "../components/PremiumPlusTicket";
import PremiumTicket from "../components/PremiumTicket";

export default function TicketGeneralInvitations()
{
    const [activeTab,setActiveTab] = useState("generaladmission")

    return(
        <div className="">
            <div className="flex items-center justify-between pt-10 px-20  gap-2 ">
                <h1 className="text-xl flex items-center gap-2">View Tickets</h1>
            </div>
                <hr className=" mx-4 md:mx-20 my-5 border-gray-400 border-1 " />

            <div className='box-border mx-20 my-10 px-20 py-10 border-gray-500 border-2 bg-white rounded-xl'>

                <div className="flex flex-col lg:flex-row justify-between gap-10">
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

                    <div className="text-left lg:text-right">
                        {ticket.map((ticket,index) => (
                            <div key={index} >
                                
                                <p>{ticket.subtitle}</p>
                                <span>{ticket.startdate} {ticket.starttime} - {ticket.enddate} {ticket.endtime}</span>
                                <p>Venue: {ticket.venue}</p>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="w-fit bg-white flex flex-wrap sm:flex-col md:flex-col lg:flex-row items-stretch mt-6  rounded-tl-xl rounded-tr-xl border-l border-t border-r border-gray-800 border-solid overflow-x-auto md:overflow-visible scrollbar-hide">
                    {
                        [
                            {id: "generaladmission", label: "General Admission"},
                            {id: "platinumticket", label: "Platinum Ticket"},
                            {id: "premiumplusticket", label: "Premium Plus Ticket"},
                            {id: "premiumticket", label: "Premium  Ticket"},
                        ].map((tab) => (
                            <button 
                                key={tab.id}
                                className={`px-5 py-2 font-semibold rounded-tl-xl border-r whitespace-nowrap lg:rounded-t-xl ${
                                    activeTab === tab.id 
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
                    {activeTab === "generaladmission" && <GeneralAdmission/>}  
                    {activeTab === "platinumticket" && <PlatinumTicket/>}  
                    {activeTab === "premiumplusticket" && <PremiumPlusTicket/>}  
                    {activeTab === "premiumticket" && <PremiumTicket/>}  
                </div>

            </div>


            
        </div>
    )
}