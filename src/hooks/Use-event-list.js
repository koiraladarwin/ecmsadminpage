import { useQuery } from "@tanstack/react-query"
import {api} from "../axios/Axios";
import { useAuthHeader } from "../features/auth/context/useAuthHeader";

export default function UseEvents()
{
  const headers = useAuthHeader();

  return useQuery(
    {
      queryKey: ["eventswithdetails"],
      queryFn: async() => {
        if(!headers.Authorization) throw new Error("User not authenticated");

        const response = await api.get("/event", {headers});
        return response.data; 
      },
      enabled: !!headers.Authorization,
    }
  )
}
