import { OrbitProgress } from "react-loading-indicators";
import MyallEvent from "../components/MyAllEvent"
import EventsPage from "./EventsPage";
import UseEventsDetails from "../../../../hooks/Use-eventDetails-list";

export default function EventPg()
{
    const {data: allEvent, isLoading} = UseEventsDetails();
    
    if(isLoading)
    {
        return(
            <div>
                <OrbitProgress variant="split-disc"
                    dense color = "#800080"
                    size="large"
                />
            </div>

        )
    }
        if(!allEvent || allEvent.length === 0)
        {
            return <EventsPage/>;
        }

        return <MyallEvent allEvent={allEvent} defaultTab="All" />;
    
}