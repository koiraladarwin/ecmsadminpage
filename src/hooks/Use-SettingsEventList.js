import { useEffect, useState } from "react";

export default function useSettingsEvent() {
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
                eventcode:"A2m45l",
                image:"/placeholder.jpg"
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

