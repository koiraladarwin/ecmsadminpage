import { useAuth } from "../features/auth/context/AuthContext";
import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";

export default function useTicketSalesData(eventId) {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["ticketSalesData", eventId],
    enabled: !!eventId,
    queryFn: async () => {
      console.log("ticket sales for event: ",eventId);
      setToken(firebaseToken);
      const response = await api.get(`/ticketattendee?event_id=${eventId}`);
      console.log("API response: ", response.data);
      return response.data;
    },
  });
}
