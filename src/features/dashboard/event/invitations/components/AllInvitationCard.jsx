import img from '../../../../../../src/assets/cargoDay.png'
import EventDetailCard from "./EventDetailCard";
import InvitationCard from "./InvitationCard";
export default function AllInvitationCard({
    eventname,
    startdate,
    starttime,
    enddate,
    endtime,
    venue,
    generalinvitation,
    organizer,
    vipinvitation,
    guestinvitation,
}) {
 
    return (
        <>
            <div className="flex justify-between flex-col gap-2 lg:flex-col box-border p-2 m-2 border-none rounded-lg md:shadow-2xl px-6 py-4  ">
                <EventDetailCard
                    img={img}
                    eventname={eventname}
                    startdate={startdate}
                    starttime={starttime}
                    enddate={enddate}
                    endtime={endtime}
                    venue={venue}
                    organizer={organizer}
                />
                <div className="flex flex-col md:flex-row gap-4">
                    <InvitationCard
                        count={generalinvitation}
                        link="/event/generalinvitation"
                        title="General Invitation"
                    />
                    <InvitationCard
                        count={vipinvitation}
                        link="/event/generalinvitation"
                        title="VIP Invitation"
                    />
                    <InvitationCard
                        count={guestinvitation}
                        link="/event/generalinvitation"
                        title="Guest Invitation"
                    />
                </div>
            </div>
        </>
    )
}