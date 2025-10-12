import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../features/auth/context/AuthContext";

export default function useStaffCategory() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["staffCategory"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/staffcategories");
      return response.data;
    },
  });
}
