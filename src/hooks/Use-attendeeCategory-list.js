import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../features/auth/context/AuthContext";

export default function useAttendeeCategory() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["attendeeCategory"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/attendeecategories");
      return response.data;
    },
  });
}
