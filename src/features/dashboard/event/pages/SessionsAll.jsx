import { Link, NavLink } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import AllSessionCard from "../components/AllSessionCard";
import useSession from "../../../../hooks/Use-session-list";
import EventDetailCard from "../invitations/components/EventDetailCard";
import img from "../../../../../src/assets/cargoDay.png"
import useSessionEvent from "../../../../hooks/use-event-session";
import { OrbitProgress } from "react-loading-indicators";

export default function SessionAll() {
    const { data: sessions, isLoading: sessionLoading } = useSession();
    const { data: eventDetail, isLoading: eventLoading } = useSessionEvent();
    const isLoading = sessionLoading || eventLoading;

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
                {isLoading ? (
                    <div className="flex justify-center items-center py-20">
                        <OrbitProgress variant="disc" dense color="#800080" size="large" />
                    </div>
                ) :
                    eventDetail.length === 0 ? (
                        <>
                            <div className="text-gray-500 py-10 text-2xl">No events for Sessions.</div>
                            <Link
                                to="/event/session"
                                className="text-purple-600 hover:text-purple-800 font-medium underline"
                            >
                                + Create Events Session
                            </Link>
                        </>
                    ) :
                        (
                            <div className="flex flex-col gap-5">
                                <>
                                    {
                                        eventDetail?.map((detail, index) => {
                                            return <div className="md:bg-white md:shadow-2xl md:px-5 md:py-5 rounded" key={index}>
                                                <EventDetailCard
                                                    {...detail} img={img} key={index}
                                                />
                                                <div className="flex py-8 gap-6  flex-wrap ">
                                                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full">
                                                        {sessions?.filter(item => item.event_id == detail.id)?.map((session, index) => {
                                                            return <AllSessionCard
                                                                key={index} {...session}
                                                            />
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        })
                                    }
                                </>
                            </div>
                        )}
            </div>
        </div>
    )
}