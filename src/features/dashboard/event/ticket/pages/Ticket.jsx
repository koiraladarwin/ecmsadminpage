import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
export default function Ticket()
{
    return(
        <div >
            <div className="flex items-center flex-col lg:flex-row md:flex-row gap-4 justify-between px-20 pt-10 md:gap-2">
                <h1 className="text-xl ">Tickets</h1>

                <NavLink to="/events/createticket" >
                <button className="bg-[#772a92] text-white px-4 py-1 rounded-3xl flex items-center gap-2 text-xl">
                <FaPlus />
                Add Ticket
                </button>
                </NavLink>
            </div>
                <hr className="ml-20 mr-20 m-10 border-gray-400 border-1" />

          <div className='box-border m-20 p-10 border-gray-500 border-2 bg-white text-center'>

        <>
                <h1 className='text-3xl font-bold mt-2'>Lets create your First Ticket </h1>
                <p className='mt-5  font-light'>
                    Welcome! Let's create your first ticket and start setting up access for your event. Customize ticket types, set prices, and 
                    manage availability-all in one place. Get started now to make your event ready for attendeed!
                </p>
                <Link to="/events/createticket">
                  <button className='flex items-center px-4 py-4 rounded-3xl gap-2 mt-5 mx-auto bg-[#f91111] '>
                    <FaPlus /> Create your 1st Ticket
                  </button>
                </Link>

        </>
        </div>
        </div>
    )
}