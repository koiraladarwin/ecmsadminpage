import { useEffect, useState } from "react";

export default function useHireTeam() {
  const [hireData, setHireData] = useState([]);

  useEffect(() => {

    const fetchHireTeam = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
                {
                eventName: "Education Fair 2025",
                totalScanner: 3,
                sessions: ["Session 1", "Session 2", "Session 5"],
                amount: 6000,
                vatRate: 0.13,
              },
            ]);
          }, 1000)
        );

        setHireData(response);
      } catch (error) {
        console.error("Error fetching hire team data:", error);
      }
    };

    fetchHireTeam();
  }, []);

  return hireData;
}

