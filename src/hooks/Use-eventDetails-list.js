import { useQuery } from "@tanstack/react-query"
import {api} from "../axios/Axios";
import { useAuthHeader } from "../features/auth/context/useAuthHeader";

export default function UseEventsDetails()
{
  const headers = useAuthHeader();

  return useQuery(
    {
      queryKey: ["eventswithdetails"],
      queryFn: async() => {
        if(!headers.Authorization) throw new Error("User not authenticated");

        const response = await api.get("/eventswithdetails", {headers});
        console.log("Events API response: ", response.data);
        return response.data; 
      },
      enabled: !!headers.Authorization,
    }
  )
}
