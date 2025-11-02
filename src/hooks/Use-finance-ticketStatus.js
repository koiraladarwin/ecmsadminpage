import { useMutation } from "@tanstack/react-query";
import { useAuthHeader } from "../features/auth/context/useAuthHeader"
import { api } from "../axios/Axios";

export const useTicketStatus = () => 
{
    const headers = useAuthHeader();

    return useMutation({
        mutationFn: async({ticket_id, attendee_id, status}) => {
            if(!headers.Authorization)
                throw new Error("User not Authenticated");

            console.log("Sending PUT :::", {
            ticket_id,
            attendee_id,
            status,
            headers,
        });
            const response = await api.put(
                `/ticketstatus?ticket_id=${ticket_id}&attendee_id=${attendee_id}&&status=${status}`, 
                    {},

                    {headers}
                );
                console.log("response data ::: ", response.data);
                return response.data;
        }
    })
}