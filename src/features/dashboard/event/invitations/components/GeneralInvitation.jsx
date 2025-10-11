import GeneralInvitationCard from "./GeneralInvitationCard";
import useGeneralInvitation from "../../../../../hooks/Use-generalInvitation-list"
export default function GeneralInvitation()
{
    const GeneralInvitation = useGeneralInvitation();

    return(
        <div>
            <div className="grid lg:grid-cols-3  grid-cols-1 mt-6 gap-6">
                {GeneralInvitation.map((general,index) => (
                    <GeneralInvitationCard
                        key={index} {...general}              
                    />
                ))}
            </div>
        </div>
    )
}