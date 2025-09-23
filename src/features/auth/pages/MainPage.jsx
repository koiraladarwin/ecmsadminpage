import google from "../../../assets/google.png"
import playstore from "../../../assets/playstore.png"
import QR from "../../../assets/QR.png"
import loginImage from "../../../assets/loginImage.png";

export default function MainPage()
{
    return(
        <div className="min-h-screen bg-bglightpurple flex md:flex-col lg:flex-row  justify-between"><br />

                <div className="pl-20  w-3/3 "> 
                    <h1 className="text-5xl font-bold text-buttonpurple pt-20">ECMS</h1>

                    <h2 className="text-5xl pt-30">The leading <br />
                        <span className="text-buttonpurple">event check-in</span><br />
                        management solution

                    </h2>
                    

                    <p className="pt-8 text-lg text-buttonpurple">
                        Streamline your guest arrivals with the leading event check-in management solution. Effortless, secure, and professional QR Code check-ins to elevte every event experience.
                    </p>

                    <p className="mt-10 text-buttonpurple">Scan QR & Download ECMS Scan App</p>

                    <div className="flex gap-6 mt-2 items-center">
                        <img src={QR} alt="QR" className="rounded-lg" />
                        <div>
                            <p className="text-buttonpurple">Available on</p>
                            <div className="flex items-center gap-2">
                                <img src={playstore} alt="" className="w-4 h-4" />
                                <p>Google Play</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="absolute lg:w-1/3 flex justify-center lg:mt-20 ml-110">
                    <img src={loginImage} alt="" className="w-100 h-68" /> 
                </div>

                <div className=" flex justify-center lg:justify-end mr-36 mt-40 w-1/3">
                    <form action="" className="border-none rounded-3xl shadow-2xl w-98 h-98 bg-borderbox-bg p-5 ">
                        <h1 className="font-semibold text-xl">Welcome! <br /> What's your email?</h1>
                        <input type="email" className="border rounded-full mt-4 w-full size-12  placeholder:pl-2" placeholder="Email" />

                        <div className="flex flex-col items-center">
                            <button className="bg-buttonpurple px-10 p-2  text-white rounded-full mt-4 ">Continue</button>
                            <span className="flex items-center space-x-2 mt-4">
                                <hr className="w-20" />
                                <p className="text-textgray">or signup with </p>
                                <hr className="w-20"/>
                            </span>
                            <p className="text-center text-sm mt-4">By clicking Continue or the Google icon, you agree to ECMS's <span className="text-buttonred"> Terms of Service </span> and <span className="text-buttonred"> Privacy Policy</span>.</p>
                            <img src={google} alt=""  className="w-24 h-24 "/>
                        </div>
                        
                    </form>
                </div>

        </div>
        
    )
}