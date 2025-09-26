import { useEffect, useState } from "react";

export default function usePaymentMethod() {
  const [paymentMethod, setPaymentMethod] = useState([]);

  useEffect(() => {
    const fetchPaymentMethod = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve(["Cash", "Cheque","Bank Transfer","QR payment"]);
          }, 1000)
        );

        setPaymentMethod(response);
      } catch (error) {
        console.error("Error fetching payment method:", error);
      }
    };

    fetchPaymentMethod();
  }, []);

  return paymentMethod ;
}
