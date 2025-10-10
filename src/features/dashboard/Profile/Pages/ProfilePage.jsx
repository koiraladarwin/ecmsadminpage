import cargoDay from "../../../../assets/cargoDay.png"; 
import teejMela from "../../../../assets/teejMela.png";
import { RxCross2 } from "react-icons/rx"; 
import { BiSolidEditAlt } from "react-icons/bi";

export default function ProfilePage()
{
    return(
        <div className="min-h-screen bg-buttonpurple pt-18 px-16 sm:px-8 md:px-16">

                <div className="border border-box rounded-2xl px-20 py-10 mx-auto bg-white ">

                    <div className="flex justify-end mb-2">
                            <RxCross2 size={20}/> 
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        <div>
                            <div className="flex flex-col lg:flex-row sm:items-start lg:items-center gap-4">
                                <div className="relative">
                                    <img src="/placeholder.jpg" alt="placeholder image" className="w-28 h-28 rounded-full border-4 border-buttonpurple object-cover"/>
                                    <button className="absolute bottom-1 right-1 bg-white border border-none  rounded-full p-1 shadow hover:bg-gray-100">
                                        <BiSolidEditAlt size={24} color="white" className="drop-shadow-[0_0_1px_black]" />
                                        {/* <Pencil size={24} stroke="black" fill="white" strokeWidth={1.5}/> */}
                                    </button>
                                </div>
                                
                                <div >
                                    <h1 className="font-bold">Your Full Name</h1>
                                    <h2>yourname@gmail.com</h2>
                                </div>
                                
                            </div>

                            <form className="space-y-6 mt-4">
                                <div className="flex items-center lg:justify-between gap-6 sm:gap-2">
                                    <label className="w-40">Name</label>
                                    <input type="text" placeholder="Name" className="border-none" />
                                </div>
                                <div className="flex items-center justify-between gap-6 sm:gap-3">
                                    <label className="w-40">Your Job Title</label>
                                    <input type="text" placeholder="Add Job Title" className="border-none" />
                                </div>
                                <div className="flex items-center justify-between gap-6 sm:gap-2">
                                    <label className="w-40">Your Department</label>
                                    <input type="text" placeholder="Add your Department" className="border-none" />
                                </div>
                                <div className="flex items-center justify-between gap-6">
                                    <label className="w-40">Mobile Number</label>
                                    <input type="text" placeholder="Add Number" className="border-none" />
                                </div>

                                <button className="px-4 py-2 rounded-full bg-buttonpurple text-white">Save Change</button>
                            </form>
                        </div>

                        <div>
                            <h1 className="text-buttonpurple text-center pt-8">Events you work in</h1>

                            <div className="border-none rounded-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 sm:p-8  lg:pl-18 m-4 gap-4 mx-10">
                                <div className=" space-y-4">
                                    <img src={cargoDay} alt="" />
                                    <img src={teejMela} alt=""/>
                                    <img src={cargoDay} alt=""/>
                                    <img src={teejMela} alt=""/>
                                </div>

                                <div className=" space-y-4">
                                    <img src={teejMela} alt="" />
                                    <img src={cargoDay} alt=""/>
                                    <img src={teejMela} alt=""/>
                                    <img src={cargoDay} alt=""/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    

                    
                </div>

                <div>

                </div>
           
            

        </div>
    )
}