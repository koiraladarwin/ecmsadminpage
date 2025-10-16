import { useAuth } from "../features/auth/context/AuthContext";
import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";

export default function useAttendee() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["totalAttendees"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/attendee");
      return response.data;
    },
  });
}
