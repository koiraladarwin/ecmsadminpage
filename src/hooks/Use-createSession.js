import { useMutation } from "@tanstack/react-query";
import {api} from "../axios/Axios";
import { useAuthHeader } from "../features/auth/context/useAuthHeader";

export const useCreateSession = () => {
    const headers = useAuthHeader();

    return useMutation({mutationFn: async(sessionData) => {

        if(!headers.Authorization) throw new Error("User not authenticated");

        const response =  await api.post("/session", sessionData,{
            headers,
        });

        return response.data;
    }
    });
};
