import { useEffect, useState } from "react";

export default function useTicketType() {
  const [ticketType, setTicketType] = useState([]);

  useEffect(() => {
    const fetchTicketType = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve(["TicketType1","TicketType2","TicketType3"]);
          }, 1000)
        );

        setTicketType(response);
      } catch (error) {
        console.error("Error fetching ticket type:", error);
      }
    };

    fetchTicketType();
  }, []);

  return ticketType ;
}
