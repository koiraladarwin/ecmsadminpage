import { useEffect, useState } from "react";

export default function usePaymentStatus() {
  const [paymentStatus, setPaymentStatus] = useState([]);

  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve(["Paid", "UnPaid"]);
          }, 1000)
        );

        setPaymentStatus(response);
      } catch (error) {
        console.error("Error fetching payment status:", error);
      }
    };

    fetchPaymentStatus();
  }, []);

  return paymentStatus;
}
