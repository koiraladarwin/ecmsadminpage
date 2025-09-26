import { useEffect, useState } from "react";

export default function useStaffOption() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
            
                { id: 'STF-001', name: 'Mr. Carlos Cole' },
                { id: 'STF-002', name: 'Mr. Peter Lee' },
                              
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

