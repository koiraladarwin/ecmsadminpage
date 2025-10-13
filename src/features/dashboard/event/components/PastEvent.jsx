import Header from "./Header.jsx";
import AllEventCard from "./AllEventCard.jsx";
import useEvents from "../../../../hooks/Use-event-list.js";
import UseEventsDetails from "../../../../hooks/Use-eventDetails-list.js";

export default function PastEvent(){

    // const {data: events, isLoading, isError} = useEvents();
    const {data: events, isLoading, isError} = UseEventsDetails();
    
    if(isLoading) return(
        <div className="flex justfy-center items-center min-h-screen">
            <OrbitProgress
                variant="split-disc"
                dense
                color="#800080"
                size="large"
            />
        </div>
    )
    if(isError) return(
        <div className="flex flex-col justify-center items-center min-h-screen text-center text-red-500">
            <p className="text-xl font-semibold">Failed to load events!</p>
            <p className="text-gray-500 mt-2">Please try again later.</p>
        </div>
    ) 
    if(!events?.length) return(
        <div className="flex flex-col justify-center items-center min-h-screen text-center text-gray-500">
            <p className="text-xl font-semibold">No Events Found</p>
            <p className="mt-2">Create a new event to see it here.</p>
        </div>
    );

    const pastEvent = events.filter(
        (event) => event.status?.trim().toLowerCase() === "closed");
    return (
        <div className="min-h-screen">
            <Header />
            <div className="box-border border-2 rounded-lg border-textgray shadow-2xl p-10 m-10 bg-white">
                <div>
                    {pastEvent.length > 0 ? ( 
                        pastEvent.map((event, index) => (
                            <AllEventCard 
                                key={index} {...event} 
                            
                            />
                        ))
                    ): (    
                        <p>No past events found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}