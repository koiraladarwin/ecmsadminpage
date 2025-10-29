import { useQuery } from "@tanstack/react-query";
import { api, setToken } from "../axios/Axios";
import { useAuth } from "../features/auth/context/AuthContext";

export default function useInvitation() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["viewTicket"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/eventinvitees");
      return response.data;
    },
  });
}
