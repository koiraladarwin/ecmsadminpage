import { useAuth } from "../features/auth/context/AuthContext";
import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";

export default function useAllEvents() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["allEvents"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/event");
      return response.data;
    },
  });
}