import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function AllSessionCard({
    name,
    hall_name,
    start_time,
    end_time,
    invitations_count,
    ticket_count,
}) {
    const [open, setOpen] = useState(false);
    const totalAttendees = Number(invitations_count) + Number(ticket_count)
    const getDate = (iso) => iso ? new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", }) : "";
    const getTime = (iso) => iso ? new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";

    return (
        <>
            <div className="col-span-1 flex justify-between flex-col gap-2 lg:flex-row box-border   border-none rounded-lg lg:shadow-xl lg:bg-white relative" tabIndex={0} onBlur={() => setOpen(false)}>
                <div className="flex flex-col gap-4 w-full lg:px-15 py-8  ">
                    <div className="flex justify-between ">
                        <div className="font-bold">{name}</div>
                        <BsThreeDotsVertical size={20} onClick={() => setOpen(!open)} />
                    </div>

                    <div className="w-full">
                        <div className="flex flex-col md:flex-row md:justify-between gap-8">
                            <div className="flex flex-col items-start">
                                <div>{getDate(start_time)}</div>
                                <div>{getTime(start_time)}-{getTime(end_time)}</div>
                                <div>{hall_name}</div>
                            </div>
                            <div className="text-3xl md:text-4xl">{totalAttendees}</div>
                        </div>
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