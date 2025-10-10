import GuestInvitationCard from "./GuestInvitationCard";
import useGuestInvitation from "../../../../../hooks/Use-guestInvitation-list"

export default function GuestInvitation()
{
    
    
        const GuestInvitation = useGuestInvitation();
    
        return(
            <div>
                <div className="grid lg:grid-cols-3  grid-cols-1 mt-6 gap-6">
                    {GuestInvitation.map((guest,index) => (
                        <GuestInvitationCard
                            key={index} {...guest}              
                        />
                    ))}
                </div>
            </div>
        )
    
}