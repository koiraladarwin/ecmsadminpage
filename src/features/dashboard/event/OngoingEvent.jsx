import Header from "../components/event/Header";
import AllEventCard from "../components/event/AllEventCard";
import { events } from "../components/event/EventsDetail";
export default function OngoingEvent(){

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