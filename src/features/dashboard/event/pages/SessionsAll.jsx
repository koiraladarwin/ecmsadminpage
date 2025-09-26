import { NavLink } from "react-router-dom";
import { FaChevronDown, FaPlus } from "react-icons/fa";
import AllSessionCard from "../components/AllSessionCard";
import useSession from "../../../../hooks/Use-session-list";
import { useState } from "react";

export default function SessionAll()
{
    const sessions = useSession();
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("All");

    return(
        <div className="min-h-screen">
            <div className="flex items-center flex-col gap-4 lg:flex-row justify-between pt-10 pl-20 pr-20">
                <div className="space-y-2">
                    <div className="flex gap-2">
                        <h1 className="text-xl">Show</h1>

                        <div className="relative flex items-center justify-center h-full">
                            <button 
                                onClick={() => setOpen(!open)}
                                className=" flex items-center justify-between border rounded-full px-4 py-1 w-40 bg-white">
                                {selected}
                                <FaChevronDown className="ml-2 text-buttonpurple text-xs"/>
                            </button>

                            {open &&(
                                <div className="absolute top-full right-0 mt-2 w-32 rounded-md  shadow-lg border border-none bg-white text-left">
                                    <button className="w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md text-left">All</button>
                                    <button className="w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md text-left">Event wise</button>
                                </div>
                            )}
                        </div>
                    </div>


                    <h1 className="text-xl ">Sessions - ALL</h1>
                </div>
                

                <NavLink to="/event/createsession" >
                <button className="bg-[#772a92] text-white px-4 py-1 rounded-3xl flex items-center gap-2 text-xl">
                <FaPlus />
                Add Session
                </button>
                </NavLink>
            </div>

            <hr className="ml-20 mr-20 m-10 border-gray-400 border-1" />

            <div className='box-border m-20 mt-5 p-10 border-buttonpurple rounded-lg border-2 bg-white text-center'>
                <>
                {sessions.map((session,index) => (
                    <AllSessionCard
                        key={index} {...session}
                        />
                ))}
                    

                </>
            </div>
        </div>
    )
}