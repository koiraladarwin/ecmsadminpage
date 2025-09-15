import AllEventCard from "./AllEventCard.jsx";
import Header from "./Header.jsx";
import {events} from "./EventsDetail.jsx";
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



