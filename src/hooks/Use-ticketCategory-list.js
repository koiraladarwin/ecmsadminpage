import { useEffect, useState } from "react";

export default function useTicketCategory() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
            
                'General Admission', 'Premium Ticket', 'Platinum Ticket', 'Diamond Ticket'
                              
            ]);
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

