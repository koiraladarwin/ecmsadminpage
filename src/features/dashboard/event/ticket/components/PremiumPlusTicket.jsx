import PremiumPlusTicketCard from "./PremiumPlusTicketCard";
import usePremiumPlusTicket from "../../../../../hooks/Use-premiumPlusTicket-list"

export default function PremiumPlusTicket()
{  
    const PremiumPlusTicket = usePremiumPlusTicket();
    
    return(
        <div>
            <div className="grid lg:grid-cols-3  grid-cols-1 mt-6 gap-6">
                {PremiumPlusTicket.map((platinum,index) => (
                <PremiumPlusTicketCard
                        key={index} {...platinum}              
                    />
                ))}
            </div>
        </div>
        )
    
}