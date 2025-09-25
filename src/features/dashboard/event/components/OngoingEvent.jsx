import Header from "./Header.jsx";
import AllEventCard from "./AllEventCard.jsx";
import useEvents from "../../../../hooks/Use-event-list.js";
export default function OngoingEvent(){
    const events = useEvents();
    const ongoingEvent = events.filter(
        (event) => event.status?.trim().toLowerCase() === "online");
    return (
        <div className="min-h-screen">
            <Header />
            <div className="box-border border-2 rounded-lg border-textgray shadow-2xl p-10 m-10 bg-white">
                <div>
                    {ongoingEvent.length > 0 ? ( 
                        ongoingEvent.map((event, index) => (
                            <AllEventCard 
                                key={index} {...event} 
                            
                            />
                        ))
                    ): (    
                        <p>No ongoing events found.</p>
                    )}
                </div>
            </div>
        </div>
    )
}