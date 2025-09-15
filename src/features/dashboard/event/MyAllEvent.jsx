import AllEventCard from "../components/event/AllEventCard";
import Header from "../components/event/Header";
import {events} from"../components/event/EventsDetail";
export default function MyallEvent()
{
    const filteredEvents = events.filter(
        (event) => event.status?.trim().toLowerCase() !== "soon"
    );
    return(
        <div className="min-h-screen">
            <Header />
            <div className=" box-border border-2 border-textgray rounded-lg shadow-2xl p-10 m-10 bg-white" >
                
                <div className="space-y-2">
                    {filteredEvents.map((event, index) => (
                        <AllEventCard 
                            key={index} {...event}
                            
                        />
                    ))}
                    
                </div>
            </div>
        </div>
    )
}



