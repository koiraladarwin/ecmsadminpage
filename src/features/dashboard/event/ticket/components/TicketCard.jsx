import { IoMdEye} from "react-icons/io"
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom"
import { useState } from "react";
export default function TicketCard({
    title,
    subtitle,
    startdate,
    starttime, 
    enddate,
    endtime,
    venue, 
    status,
    price,
    sold

})
{
    const [open,setOpen] = useState(false);
    
    return(
        <div>
            <div className="flex flex-col lg:flex-row sm:text-left gap-4 justify-between">
                <div className="text-left lg:w-90">
                        <span className="flex gap-2 items-center">
                            <h1 className="font-bold text-xl">{title}</h1>
                            <IoMdEye size={22}/> 
                            <Link to="/events/ticketgeneralinvitation">
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

                    <div>
                        <h1 className="font-bold text-xl">Status</h1>
                        <p className="text-transform: uppercase text-green-bg">ON SALE</p>
                    </div>

                    <div>
                        <h1 className="font-bold text-xl">Price</h1>
                        <p>{price}</p>
                    </div>

                    <div className="flex lg:gap-6 justify-between">
                        <div>
                            <h1 className="font-bold text-xl">SOLD</h1>
                            <p>{sold}</p>
                        </div>

                    
                            <div className="relative flex lg:items-center sm:-mt-6 justify-center h-full">
                                <button 
                                    onClick={() => setOpen(!open)}
                                    className="cursor-pointer mt-10"
                                >
                                    <BsThreeDotsVertical size={20} />
                                </button>

                                {open && (
                                    <div className="absolute top-full right-0 mt-2 w-40 rounded-md  shadow-lg border border-none bg-white hover:m-4">
                                        <button className="w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md">Edit Ticket</button>
                                        <button className="w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md">Change Status</button>
                                        <button className="text-buttonred w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md">Delete Ticket</button>
                                    </div>
                                )}
                                
                            </div>
                    </div>
                    
                    
            </div>

            
        </div>
    )
}