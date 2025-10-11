import PlatinumTicketCard from "./PlatinumTicketCard";
import usePlatinumTicket from "../../../../../hooks/Use-platinumTicket-list"

export default function PlatinumTicket()
{
    const PlatinumTicket = usePlatinumTicket();
    
    return(
        <div>
            <div className="grid lg:grid-cols-3  grid-cols-1 mt-6 gap-6">
                {PlatinumTicket.map((platinum,index) => (
                <PlatinumTicketCard
                        key={index} {...platinum}
                    />
                ))}
            </div>
        </div>
        )
    
}