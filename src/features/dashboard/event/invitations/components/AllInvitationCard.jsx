import img from '../../../../../../src/assets/cargoDay.png'
import EventDetailCard from "./EventDetailCard";
import InvitationCard from "./InvitationCard";
export default function AllInvitationCard({
    event,
    invitations=[]

}) {
    const categories = ['general', 'vip', 'guest'];

    const groupedInvitations = categories.map(cat => {
        const filtered = invitations.filter(
            inv => inv.invitee_category_tag?.toLowerCase().includes(cat)
        );

        return{
            category: cat,
            invitations: filtered
        };
    });
    return (
        <>
                <div className="flex justify-between flex-col gap-2 lg:flex-col box-border p-2 m-2 border-none rounded-lg md:shadow-2xl px-6 py-4  ">
                <EventDetailCard
                    img={img}
                    name={event.name}
                    start_date={event.start_date}
                    start_time={event.start_time}
                    end_date={event.end_date}
                    location={event.location}
                    end_time={event.end_time}
                    event_organizer={event.event_organizer}
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {
                        groupedInvitations.map((group) => (
                            <InvitationCard
                                key={group.category}
                                count={group.invitations.reduce((acc, inv) => acc + (inv.attendees?.length || 0), 0)}
                                link={`/event/${event.id}/invitations/${group.category}`}
                                title={group.category.toUpperCase()}
                            />
                        ))
                    }
                    

                </div>
            </div>

        </>
    )
}