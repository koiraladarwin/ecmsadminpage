import { useAuth } from "../features/auth/context/AuthContext";
import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";

export default function useStaff() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["totalStaff"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/staff");
      return response.data;
    },
  });
}
