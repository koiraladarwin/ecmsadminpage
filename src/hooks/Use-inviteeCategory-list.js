import { useQuery } from "@tanstack/react-query"
import {api} from "../axios/Axios";
import { useAuthHeader } from "../features/auth/context/useAuthHeader";

export default function UseInviteeCategory()
{
  const headers = useAuthHeader();

  return useQuery(
    {
      queryKey: ["inviteeCategory"],
      queryFn: async() => {
        if(!headers.Authorization) throw new Error("User not authenticated");

        const response = await api.get("/inviteecategories", {headers});
        return response.data; 
      },
      enabled: !!headers.Authorization,
    }
  )
}
