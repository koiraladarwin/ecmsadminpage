import Header from "./Header.jsx";
import AllEventCard from "./AllEventCard.jsx";
import { events } from "./EventsDetail.jsx";
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