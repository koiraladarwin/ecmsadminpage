import { useEffect, useState } from "react";

export default function useInvitation() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
            {
                title: "General Invitation",
                subtitle:"31st cargo Day 2025",
                startdate: "11 Sep 2025",
                starttime: "11:00 AM", 
                enddate:"15 sep 2025",
                endtime:"05:00 PM",
                venue:"Master Hall, Hyatt Regency, Kathmandu", 
                invitation:"150"
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
