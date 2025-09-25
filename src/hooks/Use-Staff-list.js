import { useEffect, useState } from "react";

export default function useStaff() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
            
                { id: 1, name: "Mr. Carlos Cole", role: "Risk Analyst", company: "Biz Tech Pvt. Ltd.", image: "/placeholder.jpg" },
                { id: 2, name: "Ms. Sarah Lee", role: "Software Engineer", company: "Innovate Solutions", image: "/placeholder.jpg" },
                { id: 3, name: "Mr. John Doe", role: "UI/UX Designer", company: "Pixel Studio", image: "/placeholder.jpg" },
                { id: 4, name: "Mrs. Emily Davis", role: "Project Manager", company: "NextGen IT", image: "/placeholder.jpg" },
                { id: 5, name: "Mr. Michael Smith", role: "HR Manager", company: "Global HR Ltd.", image: "/placeholder.jpg" },
                { id: 6, name: "Ms. Olivia Brown", role: "Marketing Specialist", company: "Brandify Media", image: "/placeholder.jpg" },
                { id: 7, name: "Mr. Daniel Wilson", role: "Business Analyst", company: "Growth Corp", image: "/placeholder.jpg" },
                { id: 8, name: "Ms. Sophia Miller", role: "Data Scientist", company: "Insight Labs", image: "/placeholder.jpg" },
                { id: 9, name: "Mr. Ethan Taylor", role: "Sales Executive", company: "MarketEdge", image: "/placeholder.jpg" },
            
                
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

