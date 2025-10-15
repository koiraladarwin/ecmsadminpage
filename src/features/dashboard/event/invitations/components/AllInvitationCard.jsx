import img from '../../../../../../src/assets/cargoDay.png'
import EventDetailCard from "./EventDetailCard";
import InvitationCard from "./InvitationCard";
export default function AllInvitationCard({
    name,
    start_date,
    start_time,
    end_date,
    end_time,
    location,
    generalinvitation,
    event_organizer,
    vipinvitation,
    guestinvitation,
}) {
 
    return (
        <>
            <div className="flex justify-between flex-col gap-2 lg:flex-col box-border p-2 m-2 border-none rounded-lg md:shadow-2xl px-6 py-4  ">
                <EventDetailCard
                    img={img}
                    name={name}
                    start_date={start_date}
                    start_time={start_time}
                    end_date={end_date}
                    end_time={end_time}
                    location={location}
                    event_organizer={event_organizer}
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