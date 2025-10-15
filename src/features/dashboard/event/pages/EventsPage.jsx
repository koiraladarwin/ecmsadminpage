import { FaPlus } from "react-icons/fa"
import { Link } from 'react-router-dom'
import EventHeader from "../components/Header.jsx"
import AllEventCard from "../components/AllEventCard.jsx"
import { useState } from "react";
import { OrbitProgress } from "react-loading-indicators";
import UseEventsDetails from "../../../../hooks/Use-eventDetails-list.js";
import { getEventStatus } from "../components/EventStatus.js";

export default function EventsPage() {

  const [activeTab, setActiveTab] = useState(null);

  const {data: events, isLoading, isError} = UseEventsDetails();

  if(isLoading) return(
        <div className="flex justify-center items-center min-h-screen">
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

  
  const eventList = Array.isArray(events) ? events : [];

  const filteredEvents = eventList.filter((event) => {
  const status = getEventStatus(event.start_time, event.end_time);

    if (activeTab === "ALL") return true;
    if (activeTab === "PAST") return status === "Offline";
    if (activeTab === "ONGOING") return status === "Online";
    if (activeTab === "UPCOMING") return status === "Soon";

    return true;

  })
  return (
    <>
      <div className='flex h-full bg-light-background p-14 '>
        <div className='w-full'>

          <EventHeader activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className='box-border border-gray-500  p-10 border-2 bg-white text-center'>

            {activeTab == null && (
              <>
                <h1 className='text-3xl font-bold mt-2'> Welcome! Lets create your first event </h1>
                <p className='mt-5'>Let's create your first event and get things rolling. This is your space to plan,
                  organize, and bring your ideas to life. Click below to get started and make something great!
                </p>
                <Link to="/event/createvent">
                  <button className='flex items-center px-4 py-2 rounded-3xl gap-2 mt-5 mx-auto bg-[#f91111] '>
                    <FaPlus /> Create your 1st Event
                  </button>
                </Link>

              </>
            )}

            {activeTab !== null && (
              <div className="flex gap-2 flex-col">

                {filteredEvents.map((event) => {
                  return <AllEventCard {...event} key={event.id} />
                })
                }

              </div>
            )}
          </div>
          <div className="h-1">
          </div>
        </div>
      </div>
    </>
  )
}
