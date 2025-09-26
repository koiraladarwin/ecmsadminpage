import { useEffect, useState } from "react";

export default function useAttendeeType() {
  const [attendeeType, setAttendeeType] = useState([]);

  useEffect(() => {
    const fetchAttendeeType = async () => {
      try {
        const response = await new Promise((resolve) =>
          setTimeout(() => {
            resolve(["AttendeeType1", "AttendeeType2", "AttendeeType3"]);
          }, 1000)
        );

        setAttendeeType(response);
      } catch (error) {
        console.error("Error fetching attendee type:", error);
      }
    };

    fetchAttendeeType();
  }, []);

  return attendeeType;
}
