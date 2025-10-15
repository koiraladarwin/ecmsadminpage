import { OrbitProgress } from "react-loading-indicators";
import AttendeeCard from "./AttendeeCardDetail";

export default function AllAttendeeCard({ attendees, isLoading = true }) {
    if (!attendees || attendees.length === 0) {
        return <p className="text-center text-2xl mt-15 text-gray-500">No attendees enrolled for this ticket.</p>;
    }

    return (
        <div>
            <div className="grid lg:grid-cols-3  grid-cols-1 mt-6 gap-6">
                {isLoading ?
                    <>
                        <div className="flex justify-center w-full">
                            <OrbitProgress color="#800080" size="medium" text="" textColor="" />
                        </div>
                    </> :
                    <>
                        {attendees?.map((attendee, index) => (
                            <AttendeeCard
                                key={index} {...attendee}
                            />
                        ))}
                    </>}
            </div>
        </div>
    )

}