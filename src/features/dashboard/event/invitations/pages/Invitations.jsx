import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
export default function Invitations()
{
    return(
        <div >
            <div className="flex items-center justify-between pl-20 pr-20 pt-10 md:gap-2">
                <h1 className="text-xl ">Invitations</h1>

                <NavLink to="/event/createinvitation" >
                <button className="bg-[#772a92] text-white px-4 py-1 rounded-3xl flex items-center gap-2 text-xl">
                <FaPlus />
                Add Invitation
                </button>
                </NavLink>
            </div>
                <hr className="ml-20 mr-20 m-10 border-gray-400 border-1" />

          <div className='box-border m-20 p-10 border-gray-500 border-2 bg-white text-center'>

        <>
                <h1 className='text-3xl font-bold mt-2'>Lets create your First Invitation </h1>
                <p className='mt-5  font-light'>
                    Ready to share your event with others? Create your first event inviation in just a few clicks and start inviting guests effortlessly.
                    Its simple, fast, and the perfect way to get your. 
                </p>
                <Link to="/event/createinvitation">
                  <button className='flex items-center px-4 py-4 rounded-3xl gap-2 mt-5 mx-auto bg-[#f91111] '>
                    <FaPlus /> Create your 1st Invitation
                  </button>
                </Link>

        </>
        </div>
        </div>
    )
}