import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../features/auth/context/AuthContext";

export default function useAllAttendee() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["attendee"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/attendee");
      return response.data;
    },
  });
}
