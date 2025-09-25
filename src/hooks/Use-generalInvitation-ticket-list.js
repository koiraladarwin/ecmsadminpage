import { useEffect, useState } from "react";

export default function useGeneralTicketInvitation() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {

            const repeatedInvitations = [];
            for (let i = 0; i < 9; i++) {
              repeatedInvitations.push({
                id: i + 1, 
                name: "Mr. Carlos Cole",
                type: "Risk Analyst",
                company: "Biz Tech Pvt. Ltd.",
                image: "/placeholder.jpg"
              });
            }
            resolve(repeatedInvitations);
            
          }, 1000)
        );

        setEvents(response);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return events;
}
