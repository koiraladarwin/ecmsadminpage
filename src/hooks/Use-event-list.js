import { useEffect, useState } from "react";

export default function useEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
              {
                title: "31st cargoday 2025",
                startdate: "11 Sep 2025",
                starttime: "10:00 AM",
                enddate: "15 Sep 2025",
                endtime: "05:00 PM",
                venue: "Hotel Hyatt Regency, Kathmandu",
                organizer: "Nepal Freight & Forwarders Association (NEFFA)",
                session: ["Inauguration ceremony", "Cargo Conference", "Lunch"],
                invitation: 400,
                ticket: 450,
                checkin: "256/400",
                status: "Online",
              },
              {
                title: "Teej Mela 2081",
                startdate: "8 Aug 2024",
                starttime: "10:00 AM",
                endtime: "05:00 PM",
                venue: "Arpan banquet, Kathmandu",
                organizer: "Nepal Freight & Forwarders Association (NEFFA)",
                session: ["Beauty Tips", "Health Awareness"],
                invitation: 500,
                ticket: 0,
                checkin: "256/500",
                status: "Closed",
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
