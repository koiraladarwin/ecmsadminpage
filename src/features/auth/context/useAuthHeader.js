import { useAuth } from "../context/AuthContext";

export const useAuthHeader = () => {
  const { firebaseToken } = useAuth();

  const headers = firebaseToken
    ? { Authorization: `Bearer ${firebaseToken}` }
    : {};

  return headers;
};
