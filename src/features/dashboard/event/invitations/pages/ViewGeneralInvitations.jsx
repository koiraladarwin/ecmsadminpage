import { IoSearch } from "react-icons/io5";
import { invitation } from "../components/InvitationsDetail";
import useGeneralInvitation from "../../../../../hooks/Use-generalInvitation-list"
import GeneralInvitationCard from "../components/GeneralInvitationCard";
import GeneralInvitation from "../components/GeneralInvitation";
import { useState } from "react";
import VipInvitation from "../components/VipInvitation";
import GuestInvitation from "../components/GuestInvitation";

export default function ViewGeneralInvitations()
{
    const [activeTab, setActiveTab] = useState("generalinvitation");
    return(
        <div className="">
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
                        {invitation.map((invitation,index) => (
                            <div key={index} >
                                
                                <p>{invitation.subtitle}</p>
                                <span>{invitation.startdate} {invitation.starttime} - {invitation.enddate} {invitation.endtime}</span>
                                <p>Venue: {invitation.venue}</p>
                            </div>
                        ))}

                    </div>

                </div>

                <div className="w-fit bg-white flex flex-wrap sm:flex-col md:flex-col lg:flex-row items-stretch mt-6  rounded-tl-xl rounded-tr-xl border-l border-t border-r border-gray-800 border-solid overflow-x-auto md:overflow-visible scrollbar-hide">
                    {
                        [
                            {id: "generalinvitation", label: "General Invitation"},
                            {id: "vipinvitation", label: "VIP Invitation"},
                            {id: "guestinvitation", label: "Guest Invitation"},
                        ].map((tab) => (
                            <button 
                                key={tab.id}
                                className={`px-5 py-2 font-semibold rounded-tl-xl border-r rounded-t-xl ${
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
                    {activeTab === "generalinvitation" && <GeneralInvitation/>}  
                    {activeTab === "vipinvitation" && <VipInvitation/>}  
                    {activeTab === "guestinvitation" && <GuestInvitation/>}  
                </div>

            </div>


            
        </div>
    )
}