import { useEffect, useState } from "react";

export default function useSession() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
              {
                title: "Inauguration Ceromony",
                startdate: "27 July 2025",
                starttime: "10:00 AM",
                endtime: "12:30 PM",
                venue: "Master Hall",
                attendee: "200",
              },
              {
                title: "Conference",
                events: [
                  {
                    startdate: "27th July 2025",
                    starttime: "04:00 PM",
                    endtime: "06:00 PM",
                    venue: "Conference  Hall",
                    attendee: "100",
                  },
                  {
                    startdate: "28th July 2025",
                    starttime: "02:00 PM",
                    endtime: "05:00 PM",
                    venue: "Conference  Hall",
                    attendee: "120",
                  },
                ],
              },
              {
                title: "Lunch",
                events: [
                  {
                    startdate: "27th July 2025",
                    starttime: "01:00 PM",
                    endtime: "02:00 PM",
                    venue: "Dining Hall",
                    attendee: "150",
                  },
                  {
                    startdate: "28th July 2025",
                    starttime: "01:00 PM",
                    endtime: "02:00 PM",
                    venue: "Dining Hall",
                    attendee: "180",
                  },
                ],
              },

              {
                title: "Gala Dinner",
                startdate: "28th July 2025",
                starttime: "06:00 PM",
                endtime: "10:00 PM",
                venue: "Banquet Hall",
                attendee: "150",
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
