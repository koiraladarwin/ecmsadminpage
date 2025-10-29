import { OrbitProgress } from "react-loading-indicators";
import UseShowAllInvitation from "../../../../../hooks/Use-AllInvitation-list";
import Invitations from "./Invitations";
import ShowAllInvitations from "./ShowAllInvitations";

export default function InvitationPg()
{
    const {data: invitation, isLoading} = UseShowAllInvitation();

    if(isLoading)
    {
        return(
            <div className="flex justify-center items-center">
                <OrbitProgress
                    variant = "split-disc"
                    dense color="#800080"
                    size="large"
                />
            </div>
        );
    }

    if(!invitation || invitation.length === 0)
    {
        return <Invitations />
    }

    return <ShowAllInvitations />
}