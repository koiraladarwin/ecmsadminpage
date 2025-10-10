import PremiumTicketCard from "./PremiumTicketCard";
import usePremiumTicket from "../../../../../hooks/Use-premiumTicket-list"

export default function PremiumTicket()
{  
    const PremiumTicket = usePremiumTicket();
    
    return(
        <div>
            <div className="grid lg:grid-cols-3  grid-cols-1 mt-6 gap-6">
                {PremiumTicket.map((platinum,index) => (
                <PremiumTicketCard
                        key={index} {...platinum}              
                    />
                ))}
            </div>
        </div>
        )
    
}