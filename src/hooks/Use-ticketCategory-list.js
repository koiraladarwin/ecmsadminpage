import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../features/auth/context/AuthContext";

export default function useTicketCategory() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["ticketCategory"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/ticketcategories");
      return response.data;
    },
  });
}
