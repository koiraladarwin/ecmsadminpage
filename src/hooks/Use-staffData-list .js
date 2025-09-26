import { useEffect, useState } from "react";

export default function useStaffData() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
            
                {
                  attendee: { id: 'INV-001', name: 'Mr. Lee Yng' },
                  image: "/placeholder.jpg",
                  event: 'Education Fair 2025',
                  session: 'Inauguration',
                  entry: 'Invitation'
                },
                {
                  attendee: { id: 'TKT-001', name: 'Mrs. Yng Thong' },
                  image: "/placeholder.jpg",
                  event: 'Teej Mela 2082',
                  session: 'Lunch',
                  entry: 'Ticket'
                },
                              
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

