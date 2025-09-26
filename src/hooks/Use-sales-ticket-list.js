import { useEffect, useState } from "react";

export default function useTicketSalesData() {
  const [salesData, setSalesData] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const fetchTicketSales = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve([
              {
                ticket: { id: "TKT-001", type: "General Admission" },
                image: "/placeholder.jpg",
                fullname: "Mr. Lee Yang",
                company: "ABC Company Pvt.Ltd.",
                phone: "9841254765",
                amount: "4000",
                status: "paid",
              },
              {
                ticket: { id: "TKT-001", type: "Premium Ticket" },
                image: "/placeholder.jpg",
                fullname: "Mr. Yang Thang",
                company: "XYZ Company Pvt.Ltd.",
                phone: "9841254765",
                amount: "4000",
                status: "unpaid",
              },
            ]);
          }, 1000)
        );

        setSalesData(response);
      } catch (error) {
        console.error("Error fetching ticket sales:", error);
      }
      finally{
        setLoading(false)
      }
    };

    fetchTicketSales();
  }, []);

  return {salesData,loading};
}
