import { NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AllSessionCard from "../components/AllSessionCard";
import useSession from "../../../../hooks/Use-session-list";
import EventDetailCard from "../invitations/components/EventDetailCard";
import img from "../../../../../src/assets/cargoDay.png"
import useInvitation from "../../../../hooks/Use-invitation-list";

export default function SessionAll() {
    const sessions = useSession();
    const eventDetail = useInvitation();
    return (
        <div className="min-h-screen">
            <div className="flex items-center flex-col gap-4 lg:flex-row justify-between pt-10 pl-20 pr-20">
                <div className="space-y-2">
                    <h1 className="text-xl ">Sessions</h1>
                </div>

                <NavLink to="/event/createsession" >
                    <button className="bg-[#772a92] text-white px-4 py-1 rounded-3xl flex items-center gap-2 text-xl">
                        <FaPlus />
                        Add Session
                    </button>
                </NavLink>
            </div>

            <hr className="ml-20 mr-20 m-10 border-gray-400 border-1" />

            <div className='box-border m-20 mt-5 px-15 py-10  border-buttonpurple rounded-lg border-2 bg-white text-center '>
                <div className="md:bg-white md:shadow-2xl md:px-5 md:py-5 rounded">
                    <>
                        {
                            eventDetail.map((detail, index) => (
                                <EventDetailCard
                                    {...detail} img={img} key={index}
                                />
                            ))
                        }
                        <div className="flex py-8 gap-6  flex-wrap ">
                            <div className="flex flex-col gap-4  flex-1">
                                {sessions.map((session, index) => {
                                    if (index < parseInt(sessions.length / 2)) {
                                        return <AllSessionCard
                                            key={index} {...session}
                                        />
                                    }
                                })}
                            </div>
                            <div className="flex flex-col gap-4 flex-1">
                                {sessions.map((session, index) => {
                                    if (index >= parseInt(sessions.length / 2)) {
                                        return <AllSessionCard
                                            key={index} {...session}
                                        />
                                    }
                                })}
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}