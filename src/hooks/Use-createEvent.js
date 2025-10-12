import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api";
import {getAuth} from "firebase/auth";

export const useCreateEvent = () => {
    const auth = getAuth();

    return useMutation({mutationFn: async(eventData) => {
        const user = auth.currentUser;
        if(!user) throw new Error("User not authenticated");

        const token = await user.getIdToken();

        axiosInstance.post("/event", eventData, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
    });
};
