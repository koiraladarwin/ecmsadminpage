import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
import { Link } from "react-router-dom";
export default function AllInvitationCard({
    title,
    subtitle,
    startdate,
    starttime,
    enddate,
    endtime,
    venue,
    invitation
})
{
    const [open,setOpen] = useState(false);
    return(
        <>
            <div className="flex justify-between flex-col gap-2 lg:flex-row box-border p-2 m-2 border-none rounded-lg shadow-xl  ">
                <div className="text-left lg:w-90">
                    <span className="flex gap-2 items-center">
                        <h1 className="font-bold text-xl">{title}</h1>
                        <IoMdEye size={22}/> 
                        <Link to="/event/generalinvitation">
                            <u className="cursor-pointer">view</u>
                        </Link>
                        
                    </span>
                    <p className="font-semibold">{subtitle}</p>
                    <span className="flex gap-2">  
                        <p>{startdate} - {starttime}</p>
                        <p>{enddate} - {endtime}</p>
                        
                    </span>
                    <p>Venue: {venue}</p>
                </div>

                <div className="flex justify-between gap-2 lg:gap-20 lg:w-90">
                    <div className="border rounded-2xl p-2 lg:px-10 lg:py-8 bg-borderbox-bg border-none">
                        <h1>Invitation</h1>
                        <p className="text-center mt-1 text-2xl flex items-center justify-center">{invitation}</p>
                    </div>


                    <div className="relative flex items-center justify-center h-full">
                        <button 
                            onClick={() => setOpen(!open)}
                            className="cursor-pointer mt-10"
                        >
                            <BsThreeDotsVertical size={20} />
                        </button>

                        {open && (
                            <div className="absolute top-full right-0 mt-2 w-40 rounded-md  shadow-lg border border-none bg-white hover:m-4">
                                <button className="w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md">Edit Invitation</button>
                                <button className="w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md">Change Status</button>
                                <button className="text-buttonred w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md">Delete Invitation</button>
                            </div>
                        )}
                        
                    </div>
                </div>
                
            </div>
        </>
    )
}