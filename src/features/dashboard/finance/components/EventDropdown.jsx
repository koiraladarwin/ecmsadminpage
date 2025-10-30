import { IoChevronDown, IoSearchOutline } from "react-icons/io5";
import UseEvents from "../../../../hooks/Use-event-list";
import { useEffect, useState, useRef } from "react";

export default function EventDropdown({onConfirm, attendeeSearch, onAttendeeSearch})
{
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState("");


    const dropdownRef = useRef(null);

    const {data: events} = UseEvents();

    useEffect(() => {
        function handleClickOutside(event) {
            if(dropdownRef.current && !dropdownRef.current.contains(event.target))
            {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, []);


    const filtered = events?.filter((event) => 
        event.name.toLowerCase().includes(search.toLowerCase())
    );


    const handleConfirm = () => {
        const eventObj = events.find((e) => e.name === selected);

        if(eventObj) 
        {
            onConfirm(eventObj.id);
            console.log("Selected event ::: ", eventObj);
        }  
        
        else
            alert("Please select event first");

    }


    return(
        <div ref={dropdownRef}>

            <div className="flex flex-col lg:flex-row items-left lg:items-center border border-gray-300 rounded-md py-2 gap-4  ">

                {/* search by attendee name */}
                <div className="relative md:w-72 w-full">
                    <input type="text"
                        placeholder="Search by attendee name"
                        className="bg-white focus:outline-none rounded-md w-full pr-10"
                        value={attendeeSearch || ""}

                        onChange={(e) => onAttendeeSearch(e.target.value)}
                    />

                <IoSearchOutline 
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-gray-500 cursor-pointer"
                />
                </div>

                {/* dropdown */}
                <div className="relative md:w-72 w-full">
                    <input type="text" 
                        placeholder={selected || "Select Event"}
                        value={search}
                        onChange={(e)=> {
                            setSearch(e.target.value);
                            setOpen(true);
                        }}

                        onFocus={() => setOpen(true)}

                        className="bg-white focus:outline-none rounded-md w-full pr-10"
                    />

                    <IoChevronDown  
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-2xl text-gray-500 cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                

                {
                    open && (
                        <ul className="absolute z-20 bg-gray-50 rounded-md top-full left-0 mt-2 w-full max-h-40 overflow-auto p-4">
                            {
                                filtered?.length > 0 ?(
                                    filtered.map((event) => (
                                        <li
                                            key={event.id}
                                            onClick={() => {
                                                setSelected(event.name);
                                                setSearch("");
                                                setOpen(false);
                                            }}

                                            className="p-2 hover:bg-gray-200 hover:rounded-2xl cursor-pointer"
                                        >
                                            {event.name}
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-2 text-gray-400">No events found</li>
                                )
                            }

                        </ul>
                    )
                }

                </div>

                <div>
                    <button 
                        className="bg-buttonpurple text-white py-1 px-4 rounded-full cursor-pointer"
                        onClick={handleConfirm}
                    >
                        Confirm
                    </button>
                </div>

            </div>
        </div>
    )
}