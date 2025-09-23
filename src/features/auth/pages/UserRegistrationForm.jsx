import userRegistration from "../../../assets/userRegistration.png"
import playstore from "../../../assets/playstore.png"
import { useState } from "react";
import UserRegistrationSuccess from "../Components/UserRegistrationSuccess";
export default function UserRegistrationForm()
{
    const [showSuccess,setShowSuccess] = useState(false); 

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowSuccess(true);
    }
    return(
        <div className="min-h-screen">
            <div className="grid grid-cols-2 h-screen">
                <div className=" bg-buttonpurple">
                    <h1 className="px-10 pt-6 text-white text-3xl font-bold">ECMS</h1>
                    <p className="px-10">The leading <span className="text-white">event check-in </span> management solution</p>

                    <hr className="border-white border-1 mt-8"/>
                    <div className="">
                        <img src={userRegistration} className="w-full h-full object-cover" />

                    </div>

                    <div className="m-5 flex justify-end">
                        <div>
                            <h3 className="text-white text-sm">Download San app on</h3>
                            <button className="rounded-full bg-white text-textgray flex px-4 p-1 items-center gap-2"> <img src={playstore} alt="" className="h-4 w-4"/> Google Play</button>
                        </div>
                    </div>
                        
                    
                </div>

                <div className="bg-bglightpurple max-w-full p-5">
                    <div>
                        <h1 className="text-transform: uppercase flex justify-center mt-6 font-bold text-2xl">
                            User Registration
                        </h1>
                    </div>
                    <hr className="m-10"/>

                    <form onSubmit={handleSubmit} className="ml-10 mr-10">
                        <div className="flex flex-col mt-10">
                            <label className="label">Full Name*</label>
                            <input type="text" className="w-full bg-white" />
                        </div>

                        <div className="grid grid-cols-2 gap-16 mt-20">
                            <div className="flex flex-col mt-10">
                                <label className="label">Mobile*</label>
                                <input type="text" className="w-full bg-white"/>
                            </div>

                            <div className="flex flex-col mt-10">
                                <label className="label">Choose User Type*</label>
                                <input type="text" className="w-full bg-white"/>
                            </div>
                        </div>

                        <div className="mt-10">
                            <label className="label">Company*</label>
                            <input type="text" className="w-full bg-white" />
                        </div>

                        <div className="grid grid-cols-2 gap-16 mt-10">
                            <div>
                                <label className="label">Company Address</label>
                                <input type="text" className="w-full bg-white" />

                            </div>

                            <div>
                                <label className="label">PAN/VAT*</label>
                                <input type="text" className="w-full bg-white" />
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button className="px-15 pt-2 pb-2 m-8 bg-buttonpurple text-white rounded-full ">Submit</button>
                        </div>
                        
                        
                    </form>

                    {showSuccess && (
                        <div onClick={() => setShowSuccess(false)}>
                            <UserRegistrationSuccess />
                        </div>
                        
                    )}
                </div>
            </div>
            
        </div>
    )
} 