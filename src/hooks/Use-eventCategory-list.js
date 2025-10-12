import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../features/auth/context/AuthContext";

export default function useEventCategory() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["eventCategory"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/eventcategories");
      return response.data
    },
  });
}
