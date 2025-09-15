import { FaPlus } from "react-icons/fa"
import { Link } from 'react-router-dom'
import EventHeader from "../components/Header.jsx"
import { events } from "../components/EventsDetail.jsx"
import AllEventCard from "../components/AllEventCard.jsx"

export default function EventsPage() {

  return (
    <>
      <div className='flex h-full bg-[#e1d0f0]'>
        <div className='w-full'>

          <EventHeader />

          <div className='box-border m-20 p-10 border-gray-500 border-2 bg-white text-center'>

            {events.length === 0 &&
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
            }
            <div className="flex gap-2 flex-col">

              {events.map((event) => {
                return <AllEventCard {...event} key={event.id} />
              })
              }

            </div>
          </div>
          <div className="h-1">
          </div>
        </div>
      </div>
    </>
  )
}
