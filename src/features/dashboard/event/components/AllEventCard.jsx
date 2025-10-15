import loginimage from "../../../../assets/login.png";
import { useMemo } from "react";
import { getEventStatus } from "./EventStatus";

export default function AllEventCard({
    name, 
    start_date, 
    start_time,
    end_date,
    end_time, 
    location, 
    event_organizer, 
    session_names = [],
    invitation_count, 
    ticket_count, 
    checked_in_count, 
    image
})
{
    const status = useMemo(() => getEventStatus(start_time, end_time), [start_time,end_time]);
    
    const statusColor = status === "Online" ? "bg-green-500" : status === "Soon" ? "bg-blue-500" :"bg-red-500";

    return(
        <div className="">
        <div className=" flex items-stretch border border-textgray rounded-lg bg-borderbox-bg  shadow-xl overflow-hidden">

            <div className={`${statusColor} w-4 rounded-l-lg`} />
                
        <div className="flex items-center justify-between p-4 w-full">
        

            <div className="flex-1 p-4">

                <div className="flex flex-col lg:flex-row gap-4 justify-between items-start">

                    <div className="flex flex-col lg:flex-row gap-8">
                    <div className="w-20 h-20">
                        <img src={image || loginimage} className=" object-contain" alt="" />
                    </div>

                            <div className="space-y-1 flex flex-col  text-left">
                                <h2 className="text-2xl font-bold">{name}</h2>
                                <div className="flex space-x-2 text-gray-600">
                                    <p>{start_date}</p>
                                    <p>{start_time}</p>
                                    <p>-</p>
                                    <p>{end_date}</p>
                                    <p>{end_time}</p>
                                </div>
                                <p className="text-sm">
                                    <span className="font-semibold">Venue: </span>{location}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Event Organizer: </span>{event_organizer}
                                </p>
                            </div>

                    </div>

                    <div className=" flex items-center gap-2">
                        <p className="">Status:</p>

                        <div className={`flex items-center justify-between w-20 h-6 rounded-full px-2 text-white text-xs font-semibold ${statusColor}`}>
                            
                            {status === "Online" ? (
                                <>
                                    <span className="w-4 h-4 bg-white rounded-full"></span>
                                    <span className="text-white">{status}</span>  
                                </>
                            ): (
                                <>
                                    <span className="text-white">{status}</span>
                                    <span className="w-4 h-4 bg-white rounded-full"></span>
                                </>

                            )}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-5 gap-2 mt-3 text-left  ">                  
                    <div className="border border-textgray pl-5 px-8 pb-0 rounded-lg shadow-xl text-left">
                        <h1 className="font-bold">Sessions</h1>
                        <ul className="text-sm text-gray-500 mt-2">
                            {session_names.map((s,index) => (
                                <li key={index}>{s}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="border border-textgray pl-5 px-8 pb-0 rounded-lg shadow-xl text-left">
                        <h1>Invitations</h1>
                        <p className="mt-2 text-sm text-gray-500 text-center">{invitation_count}</p>
                    </div>
                    <div className="border border-textgray pl-5 px-8 pb-0 rounded-lg shadow-xl text-left">
                        <h1>Check-ins</h1>
                        <p className="mt-2 text-sm text-gray-500 text-center">{checked_in_count}</p>
                    </div>
                    <div className="border border-textgray pl-5 px-8 pb-0 rounded-lg shadow-xl text-left">
                        <h1>Tickets</h1>
                        <p className="mt-2 text-sm text-gray-500 text-center">{ticket_count}</p>
                    </div>

                </div>
            </div>

            

        </div>
        </div>
    </div>
    )
}
