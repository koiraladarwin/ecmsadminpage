import google from "../../../assets/google.png"
import playstore from "../../../assets/playstore.png"
import QR from "../../../assets/QR.png"
import loginImage from "../../../assets/loginImage.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const { signInWithGoogle } = useAuth();
    const navigate = useNavigate()

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            navigate("/")
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <div className="min-h-screen bg-bglightpurple flex md:flex-col lg:flex-row  justify-between"><br />

            {/* <div className=" pl-20  w-3/3 "> */}
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0 sm:pl-4">
                <h1 className="text-3xl md:text-4xl font-semibold text-buttonpurple pt-10">ECMS</h1>

                <h2 className="text-3xl md:text-4xl pt-20 font-semibold">The leading <br />
                    <span className="text-buttonpurple">event check-in</span><br />
                    management solution

                </h2>


                <p className="pt-8 text-base md:text-lg text-buttonpurple">
                    Streamline your guest arrivals with the leading event check-in management<br /> solution. Effortless, secure, and professional QR Code check-ins to elevate<br /> every event experience.
                </p>

                <p className="mt-12 text-buttonpurple">Scan QR & Download ECMS Scan App</p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:pl-4 mt-4 items-center justify-start sm:justify-center md:justify-center lg:justify-start">
                    <img src={QR} alt="QR" className="rounded-lg " />
                    <div>
                        <p className="text-buttonpurple">Available on</p>
                        <div className="flex items-center gap-2">
                            <img src={playstore} alt="QR" className="w-6 h-6" />
                            <p>Google Play</p>
                        </div>
                    </div>
                </div>


            </div>

            <div className="absolute hidden lg:w-1/3  lg:flex justify-center lg:mt-10 ml-110">
                <img src={loginImage} alt="login illustration" className="w-60 h-60" />
            </div>

            <div className="w-full sm:w-[22rem] mx-auto lg:mx-0 flex justify-center sm:justify-center md:justify-center lg:justify-end lg:mr-16 mt-35 lg:w-1/3 sm:mb-10">

                <form className="sm:w-[22rem] border-none rounded-3xl shadow-2xl w-82 h-78  bg-borderbox-bg p-5 py-10 text-center">
                    <h1 className="font-semibold text-2xl text-sidebar-bg ">Welcome!</h1>
                    <p className="text-gray-500  mt-2">sign up with</p>
                    {/* <input type="email" className="border rounded-full mt-4 w-full size-12  placeholder:pl-4 focus:outline-none" placeholder="Email" /> */}

                    <div className="flex flex-col items-center">
                        <img src={google} alt="" className="w-24 h-24 -mt-4" onClick={handleGoogleSignIn} />

                        <button className="bg-buttonpurple px-16 p-2 -mt-4 text-white rounded-full font-semibold " >Continue</button>
                        
                        <p className="text-center text-xs mt-4 text-gray-500">By clicking Continue or the Google icon, you<br />
                            agree to ECMS's <span className="text-buttonred"> Terms of Service </span> and <span className="text-buttonred"> Privacy Policy</span>.</p>
                    </div>

                </form>
            </div>

        </div>

    )
}