import { useMutation } from "@tanstack/react-query";
import api from "../axios/Axios";
import { useAuthHeader } from "../features/auth/context/useAuthHeader";

export const useCreateEvent = () => {
    const headers = useAuthHeader();

    return useMutation({mutationFn: async(eventData) => {

        if(!headers.Authorization) throw new Error("User not authenticated");

        const response =  await api.post("/event", eventData,{
            headers,
        });

        return response.data;
    }
    });
};
