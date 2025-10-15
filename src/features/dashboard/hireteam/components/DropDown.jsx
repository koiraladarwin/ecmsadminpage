import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function DropDown()
{
      const [open,setOpen] = useState(false);
    
    return(
        <div>
            <div 
                className='border-1 py-3 px-2 mt-4 border-textgray relative'
                tabIndex={0} 
                onBlur={() => setOpen(false)} 
            >

                <div onClick={() => setOpen(!open)}>
                    <FaChevronDown  size={14} className='flex justify-self-end'/> 
                </div>
                    {open && (
                        <div className="absolute top-full right-0 mt-2 w-45 text-sm rounded-md shadow-lg bg-white border border-gray-200 z-10">
                            <button className="w-full px-4 py-2 hover:bg-gray-100 rounded-md text-left">
                                31st Cargo day 2025
                            </button>
                            <button className="w-full px-4 py-2 hover:bg-gray-100 rounded-md text-left">
                                Teej Mela 2082
                            </button>
                        </div>
                    )}
            </div>
        </div>

    )
}