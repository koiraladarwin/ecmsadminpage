import AllEventCard from "./AllEventCard.jsx";
import Header from "./Header.jsx";

import { getEventStatus } from "./EventStatus.js";
import { OrbitProgress } from "react-loading-indicators";
import { useState } from "react";

export default function MyallEvent({allEvent = [], defaultTab="All", isLoading=false, isError= false})
{

    const [activeTab, setActiveTab] = useState((defaultTab));

    const filteredEvents = allEvent.filter((event) => {
        const status = getEventStatus(event.start_time, event.end_time);

        if(activeTab === "ALL") return true;
        if(activeTab === "PAST") return status ==="Offline";
        if(activeTab === "ONGOING") return status === "Online";
        if(activeTab === "UPCOMING") return status === "Soon";
        return true; 
    });


    if(isLoading) return(
        <div className="flex justify-center items-center">
            <OrbitProgress
                variant="split-disc"
                dense
                color="#800080"
                size="large"
            />
        </div>
    )


    return(
        <div className="">
            <Header activeTab={activeTab} setActiveTab={setActiveTab}/>

            {
                isError ? (
                    <div className="flex flex-col items-center text-center text-red-500">
                        <p className="text-xl font-semibold">Failed to load events!</p>
                        <p className="text-gray-500 mt-2">Please try again later.</p>
                    </div>

                ) : !filteredEvents?.length ? (
                        <div className="flex flex-col text-center items-center   text-gray-500">
                            <p className="text-xl font-semibold">No Events Found</p>
                            <p className="mt-2">Create a new event to see it here.</p>
                        </div>
                ) : (
                    <div className=" box-border border-2 border-textgray rounded-lg shadow-2xl p-10 m-10 bg-white" >
                
                        <div className="space-y-2">
                            {filteredEvents.map((event, index) => (
                                <AllEventCard 
                                    key={index} {...event}
                                    
                                />
                            ))}
                            
                        </div>
                    </div>
                )
            }
            
        </div>
    );
}



