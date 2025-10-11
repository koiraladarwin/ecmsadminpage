import VipInvitationCard from "./VipInvitationCard";
import useVipInvitation from "../../../../../hooks/Use-vipInvitation-list"

export default function VipInvitation()
{    
        const VipInvitation = useVipInvitation();
    
        return(
            <div>
                <div className="grid lg:grid-cols-3  grid-cols-1 mt-6 gap-6">
                    {VipInvitation.map((vip,index) => (
                        <VipInvitationCard
                            key={index} {...vip}              
                        />
                    ))}
                </div>
            </div>
        )
    
}