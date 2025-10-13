import AllEventCard from "./AllEventCard.jsx";
import Header from "./Header.jsx";
import useEvents from "../../../../hooks/Use-event-list.js";
export default function MyallEvent()
{
    // const events = useEvents();

    const {data: events, isLoading, isError} = useEvents();

    if(isLoading) return <p>Loading events...</p>;
    if(isError) return <p>Failed to load events.</p>;
    if(!events?.length) return <p>No events Found</p>;

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



