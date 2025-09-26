import { useEffect, useState } from "react";

export default function useSettingsStaff() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([           
                
                { id: 'STF-001', name: 'Mr. Carlos Cole', image: "/placeholder.jpg"},
                { id: 'STF-002', name: 'Mr. Carlos Cole', image: "/placeholder.jpg"},
                { id: 'STF-003', name: 'Mr. Carlos Cole', image: "/placeholder.jpg"},
                             
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

