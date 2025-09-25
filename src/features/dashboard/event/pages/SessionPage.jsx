import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
export default function SessionPage()
{
    return(
        <div className="">
            <div className="flex items-center justify-between pl-20 pr-20">
                <h1 className="text-xl ">Sessions</h1>

                <NavLink to="/event/createsession" >
                <button className="bg-[#772a92] text-white px-4 py-1 rounded-3xl flex items-center gap-2 text-xl">
                <FaPlus />
                Add Session
                </button>
                </NavLink>
            </div>
                <hr className="ml-20 mr-20 m-10 border-gray-400 border-1" />

          <div className='box-border m-20 p-10 border-gray-500 border-2 bg-white text-center'>

        <>
                <h1 className='text-3xl font-bold mt-2'> Welcome! Lets create your First Session </h1>
                <p className='mt-5 font-light '> Welcome ! You haven't created any sessions yet. Get started by setting up you first session - it's quick, simple and the best way to begin exploring everything this platform. 
                </p>
                <Link to="/event/createsession">
                  <button className='flex items-center px-4 py-4 rounded-3xl gap-2 mt-5 mx-auto bg-[#f91111] '>
                    <FaPlus /> Create your 1st Session
                  </button>
                </Link>

        </>
        </div>
        </div>
    )
}
