import playstore from "../../../assets/playstore.png"

export default function AuthenticationPage()
{
    return(
        <div className="min-h-screen bg-buttonpurple"><br />
            <div className=" ml-40 mr-40 mt-30">
                <div className="flex items-center justify-center border-none bg-bglightpurple rounded-3xl">
                    <div className="grid items-center text-center justify-center p-18">
                        
                            <h1 className="text-transform: uppercase text-3xl font-bold">Welcome to ecms</h1>
                            <p className="text-center text-buttonpurple">The leading event check-in management solution</p>

                        
                        <p className="mt-10">Onboarding Code</p>
                        <input type="text" className="border mt-2 w-32 ml-28 p-4 text-center rounded-full bg-white" />
                        <button className="p-2 ml-20 mr-20 text-transform: uppercase border rounded-full mt-4 bg-buttonpurple text-white text-xl ">Lets start</button>


                    </div>

                </div> 
                    </div>
        

        <div className="flex justify-center mt-6">
            <div>
                <h1 className="text-white text-sm">Download San app on</h1>
                <button className="rounded-full bg-white text-textgray flex px-4 p-1 items-center gap-2"><img src={playstore} className="w-4 h-4"/> Google Play</button>
            </div>
        </div>
     </div>
    )
}