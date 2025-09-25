import Header from "./Header.jsx";
import AllEventCard from "./AllEventCard.jsx";
import useEvents from "../../../../hooks/Use-event-list.js";
export default function UpcomingEvent(){
    const events = useEvents();

    const upcomingEvent = events.filter(
        (event) => event.status?.trim().toLowerCase() === "soon");
    return (
        <div className="min-h-screen">
            <Header />
            <div className="box-border border-2 rounded-lg border-textgray shadow-2xl p-10 m-10 bg-white">
                <div>
                    {upcomingEvent.length > 0 ? ( 
                        upcomingEvent.map((event, index) => (
                            <AllEventCard 
                                key={index} {...event} 
                            
                            />
                        ))
                    ): (    
                        <p>No Upcoming events found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}