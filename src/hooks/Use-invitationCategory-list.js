import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../features/auth/context/AuthContext";

export default function useInvitationCategory() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["inviteeCategory"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/inviteecategories");
      return response.data;
    },
  });
}
