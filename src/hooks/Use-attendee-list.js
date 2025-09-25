import { useEffect, useState } from "react";

export default function useAttendee() {
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchEvents = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
            
                { id: 1, name: "Mr. person1", role: "Financial Advisor", company: "Summit Capital", image: "/placeholder.jpg" },
                { id: 2, name: "Ms. person2", role: "Frontend Developer", company: "CodeWave Solutions", image: "/placeholder.jpg" },
                { id: 3, name: "Mr. person3", role: "Graphic Designer", company: "Creative Hive", image: "/placeholder.jpg" },
                { id: 4, name: "Mrs. person4", role: "Operations Manager", company: "Prime Logistics", image: "/placeholder.jpg" },
                { id: 5, name: "Mr. person5", role: "Recruitment Lead", company: "TalentWorks Ltd.", image: "/placeholder.jpg" },
                { id: 6, name: "Ms. person6", role: "Content Strategist", company: "Storyline Media", image: "/placeholder.jpg" },
                { id: 7, name: "Mr. person7", role: "Product Analyst", company: "VisionTech Inc.", image: "/placeholder.jpg" },
                { id: 8, name: "Ms. person8", role: "Machine Learning Engineer", company: "AI Nexus Labs", image: "/placeholder.jpg" },
                { id: 9, name: "Mr. person9", role: "Account Executive", company: "TradeBridge", image: "/placeholder.jpg" },
                              
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

