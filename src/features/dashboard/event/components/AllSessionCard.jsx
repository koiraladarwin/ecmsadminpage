import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function AllSessionCard({
    title,
    startdate,
    starttime,
    endtime,
    venue,
    attendee,
    events = []
}) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div className="flex justify-between flex-col gap-2 lg:flex-row box-border   border-none rounded-lg lg:shadow-xl lg:bg-white relative" tabIndex={0} onBlur={() => setOpen(false)}>
                <div className="flex flex-col gap-4 w-full lg:px-15 py-8  ">
                    <div className="flex justify-between ">
                        <div className="font-bold">{title}</div>
                        <BsThreeDotsVertical size={20} onClick={() => setOpen(!open)} />
                    </div>

                    <div className="w-full">
                        {
                            events.length > 0 ? events.map(({ startdate, starttime, endtime, venue, attendee }, key) => (
                                <div className="flex flex-col md:flex-row  gap-6 md:justify-between" key={key}>
                                    <div className="flex flex-col items-start pb-5">
                                        <div>{startdate}</div>
                                        <div>{starttime}-{endtime}</div>
                                        <div>{venue}</div>
                                    </div>
                                    <div className="text-3xl md:text-4xl">{attendee}</div>
                                </div>
                            ))
                                :
                                <div className="flex flex-col md:flex-row md:justify-between gap-8">
                                    <div className="flex flex-col items-start">
                                        <div>{startdate}</div>
                                        <div>{starttime}-{endtime}</div>
                                        <div>{venue}</div>
                                    </div>
                                    <div className="text-3xl md:text-4xl">{attendee}</div>
                                </div>

                        }
                        {open && (
                            <div className="absolute top-16 right-5 mt-2 w-20 rounded-md  shadow-lg border border-none bg-white" >
                                <button className="w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md">Modify</button>
                                <button className="text-buttonred w-full px-4 py-2 hover:bg-gray-100 hover:rounded-md">Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}