import { useAuth } from "../features/auth/context/AuthContext";
import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";

export default function useEventsWithSessionsAndTickets() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["eventsWithSessionsAndTIckets"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/eventswithsessionsandtickets");
      return response.data;
    },
  });
}
