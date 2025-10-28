import { useAuth } from "../features/auth/context/AuthContext";
import { api, setToken } from "../axios/Axios";
import { useQuery } from "@tanstack/react-query";

export default function useStaffData() {
  const { firebaseToken } = useAuth();
  return useQuery({
    queryKey: ["enrolledStaff"],
    queryFn: async () => {
      setToken(firebaseToken);
      const response = await api.get("/enrollstaff");
      return response.data;
    },
  });
}
