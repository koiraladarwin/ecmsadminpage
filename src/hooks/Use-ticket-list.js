import { useEffect, useState } from "react";

export default function useTicket() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
              {
                eventname: "31st Cargo Day 2025",
                startdate: "27th July 2025 ",
                starttime: "10:00 AM to ",
                enddate: "27 July 2025",
                endtime: "06:00 PM",
                venue: "Hotel Hyatt Regency Kathmandu",
                organizer: " Nepal Freight & Forwarders Association (NEFFA)",
                generaladmission: 90,
                platiniumticket: 5,
                premiumplusticket: 18,
                premiumticket: 175,
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
