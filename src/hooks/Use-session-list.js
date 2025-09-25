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
                subtitle:"31st cargo Day 2025",
                startdate: "11 Sep 2025",
                starttime: "11:00 AM", 
                venue:"Master Hall, Hyatt Regency, Kathmandu", 
                attendee:"150"
              },

              {
                title: "Lunch",
                subtitle:"31st cargo Day 2025",
                startdate: "11 Sep 2025",
                starttime: "11:00 AM", 
                venue:"Banquet Hall, Hyatt Regency, Kathmandu", 
                attendee:"100"
              },

              {
                title: "Cargo Member Interaction",
                subtitle:"31st cargo Day 2025",
                startdate: "11 Sep 2025",
                starttime: "11:00 AM", 
                venue:"Conference Hall, Hyatt Regency, Kathmandu", 
                attendee:"350"
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
