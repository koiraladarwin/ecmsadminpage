import { FaPlus } from "react-icons/fa"
import { Link } from 'react-router-dom'
import EventHeader from "../components/Header.jsx"
import { events } from "../components/EventsDetail.jsx"
import AllEventCard from "../components/AllEventCard.jsx"
import { useState } from "react";

export default function EventsPage() {

  const [activeTab, setActiveTab] = useState(null);

  const filteredEvents = events.filter((event) => {
    if (activeTab === "ALL") return true;
    if (activeTab === "PAST") return event.status?.toLowerCase() === "closed";
    if (activeTab === "ONGOING") return event.status?.toLowerCase() === "online";
    if (activeTab === "UPCOMING") return event.status?.toLowerCase() === "soon";

    return true;

  })
  return (
    <>
      <div className='flex h-full bg-light-background p-14'>
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
