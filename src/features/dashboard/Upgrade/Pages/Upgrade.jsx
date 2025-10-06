export default function Upgrade()
{
    return(
        <div>
            <div className=" text-center pt-10 ">
                <h1 className="text-2xl">Pricing That Grows With Your Event Program</h1>
                <h2 className="text-xl">All ECMS plans include unlimited events. Price on package plan.</h2>
            </div>

            <hr className="mt-6 mx-20 border-gray-400 border-1" />


            <div className='box-border my-6 mx-20 p-10 border-gray-500 border-2 bg-white '>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

                    <div className="border">
                        <div className="bg-buttonpurple text-white text-center p-4 font-semibold">
                            <h1>Walk Plan</h1>
                        </div>
                        <div className="p-6">
                            <h1 >For small teams who want to achieve more with their events.</h1>
                            <ul className="list-none space-y-1 py-6">
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">Unlimited events</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">Unlimited attendees registration</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">1000 enrollments p.a.</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">2 Scanners</li>
                            </ul>
                            <p>NRS. 15,000/-</p>

                            <div className="flex justify-center pt-8">
                                <button className="bg-buttonpurple text-white py-2 px-20 rounded-full flex font-semibold">BUY</button>
                            </div>

                        </div>
                    </div>

                    <div className="border">
                        <div className="bg-buttonpurple text-white text-center p-4 font-semibold">
                            <h1>Run Plan</h1>
                        </div>
                        <div className="p-6">
                            <h1 >Idea for teams looking to scale your event program.</h1>
                            <ul className="list-none space-y-1 py-6">
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">Unlimited events</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">Unlimited attendees registration</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">1600 enrollments p.a.</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">3 Scanners</li>
                            </ul>
                            <p>NRS. 20,000/-</p>

                            <div className="flex justify-center pt-8">
                                <button className="bg-buttonpurple text-white py-2 px-20 rounded-full flex font-semibold">Lodge Issue</button>
                            </div>

                        </div>
                    </div>

                    <div className="border">
                        <div className="bg-buttonpurple text-white text-center p-4 font-semibold">
                            <h1>Fly Plan</h1>
                        </div>
                        <div className="p-6">
                            <h1 >For Larger organizations and event management companies.</h1>
                            <ul className="list-none space-y-1 py-6">
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">Unlimited events</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">Unlimited attendees registration</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">2500 enrollments p.a.</li>
                                <li className="relative pl-4 before:content-['-'] before:mr-2 before:absolute before:left-0 before:text-gray-600">5 Scanners</li>
                            </ul>
                            <p>NRS. 25,000/-</p>

                            <div className="flex justify-center pt-8">
                                <button className="bg-buttonpurple text-white py-2 px-20 rounded-full flex font-semibold">Lodge Issue</button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="pt-10">
                    <h1 className="font-semibold text-2xl font-">All paid plans include:</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-2 pt-5 pr-10 gap-10 ">
                        <div>
                            <h1 className="text-xl ">Onboarding</h1>
                            <ul className="list-none text-textgray">
                                <li>Structured onboarding information by e-mail(from Growth)</li>
                                <li>Phone onboarding support(from Complete)</li>
                                <li>Event creation process for fast event creation</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-xl ">Customer Success Team</h1>
                            <ul className="list-none text-textgray">
                                <li>Access to our premium support service</li>
                                <li>Immediate call-back support for issues</li>
                                <li>Dedicated Customer Success Manager(from Complete)</li>
                            </ul>
                        </div>

                        <div>
                            <h1 className="text-xl ">Data Protection & Compliance</h1>
                            <ul className="list-none text-textgray">
                                <li>Data encryption via SSL/TLS L2 with SHA-256</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}