import Header from "../components/event/Header";
import AllEventCard from "../components/event/AllEventCard";
import { events } from "../components/event/EventsDetail";
export default function PastEvent(){

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