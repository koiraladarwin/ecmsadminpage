import { FaPlus } from "react-icons/fa"
import { Link } from 'react-router-dom'
import Header from "../components/event/Header"

export default function EventsPage() {

  const events = [];
  return (
    <>
      <div className='flex min-h-full bg-[#e1d0f0]'>
        <div className='w-full'>

          <Header />

          <div className='box-border m-20 p-10 border-gray-500 border-2 bg-white text-center'>

            <h1 className='text-3xl font-bold mt-2'> Welcome! Lets create your first event </h1>
            <p className='mt-5'>Let's create your first event and get things rolling. This is your space to plan,
              organize, and bring your ideas to life. Click below to get started and make something great!
            </p>

            <Link to="/newevent">
              <button className='flex items-center px-4 py-2 rounded-3xl gap-2 mt-5 mx-auto bg-[#f91111] '>
                <FaPlus /> Create your 1st Event
              </button>
            </Link>

          </div>

        </div>

      </div>
    </>
  )
}

