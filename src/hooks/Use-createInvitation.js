import { useMutation } from "@tanstack/react-query";
import {api} from "../axios/Axios";
import { useAuthHeader } from "../features/auth/context/useAuthHeader";

export const useCreateInvitation = () => {
    const headers = useAuthHeader();

    return useMutation({mutationFn: async(invitationData) => {

        if(!headers.Authorization) throw new Error("User not authenticated");

        const response =  await api.post("/invitee", invitationData,{
            headers,
        });

        return response.data;
    }
    });
};
