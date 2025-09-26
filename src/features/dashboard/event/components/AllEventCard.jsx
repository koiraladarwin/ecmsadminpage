import loginimage from "../../../../assets/login.png"
export default function AllEventCard({
    title, 
    startdate, 
    starttime,
    enddate,
    endtime, 
    venue, 
    organizer, 
    session = [],
    invitation, 
    ticket, 
    checkin, 
    status
})
{
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
                        <img src={loginimage} className=" object-contain" alt="" />
                    </div>

                            <div className="space-y-1 flex flex-col  text-left">
                                <h2 className="text-2xl font-bold">{title}</h2>
                                <div className="flex space-x-2 text-gray-600">
                                    <p>{startdate}</p>
                                    <p>{starttime}</p>
                                    <p>-</p>
                                    <p>{enddate}</p>
                                    <p>{endtime}</p>
                                </div>
                                <p className="text-sm">
                                    <span className="font-semibold">Venue: </span>{venue}
                                </p>
                                <p className="text-sm">
                                    <span className="font-semibold">Event Organizer: </span>{organizer}
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
                            {session.map((s,index) => (
                                <li key={index}>{s}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="border border-textgray pl-5 px-8 pb-0 rounded-lg shadow-xl text-left">
                        <h1>Invitations</h1>
                        <p className="mt-2 text-sm text-gray-500 text-center">{invitation}</p>
                    </div>
                    <div className="border border-textgray pl-5 px-8 pb-0 rounded-lg shadow-xl text-left">
                        <h1>Check-ins</h1>
                        <p className="mt-2 text-sm text-gray-500 text-center">{checkin}</p>
                    </div>
                    <div className="border border-textgray pl-5 px-8 pb-0 rounded-lg shadow-xl text-left">
                        <h1>Tickets</h1>
                        <p className="mt-2 text-sm text-gray-500 text-center">{ticket}</p>
                    </div>

                </div>
            </div>

            

        </div>
        </div>
    </div>
    )
}
