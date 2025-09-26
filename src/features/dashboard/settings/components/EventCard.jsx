export default function EventCard({
    title,
    startdate,
    starttime,
    enddate,
    endtime,
    venue,
    organizer,
    eventcode,
    image

}){
    return(
        <div>
            <div className="flex gap-6 flex-col lg:flex-row">
                <div>
                    <img src={image} alt=""  className="w-16 h-16 m-10"/>
                </div>
                <div >
                    <div className="flex gap-6">
                        <h1 className="font-bold">Event Name  : </h1>
                        <p className="font-light">{title}</p>
                    </div>
                    
                    <div className="flex gap-6">
                        <h1 className="font-bold">Date & Time  :</h1>
                        <p className="font-light">{startdate} {starttime} to {enddate} {endtime}</p>
                    </div>

                    <div className="flex gap-16">
                        <h1 className="font-bold">Venue   :</h1>
                        <p className="font-light">{venue}</p>
                    </div>

                    <div className="flex gap-6">
                        <h1 className="font-bold">Organizer :</h1>
                        <p className="font-light">{organizer}</p>
                    </div>
                    
                    <div className="flex gap-6">
                        <h1 className="font-bold">Event Code : </h1>
                        <p className="font-bold">{eventcode}</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
