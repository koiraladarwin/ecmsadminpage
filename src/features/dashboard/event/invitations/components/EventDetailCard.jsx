export function formatDateTimeRange(startISO, endISO) {
  if (!startISO || !endISO) return "";

  const startDate = new Date(startISO);
  const endDate = new Date(endISO);

  // Format dates
  const startDateStr = startDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const endDateStr = endDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  // Format times
  const startTimeStr = startDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const endTimeStr = endDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${startDateStr} ${startTimeStr} to ${endDateStr} ${endTimeStr}`;
}

function EventDetailCard(props) {
  const { img, name, start_time, end_time, location, event_organizer } = props;


  return (
    <div className="flex flex-col lg:flex-row md:bg-slate-50 p-4 rounded-lg items-start gap-12 md:shadow-lg">
      {/* Event Image */}
      <div className="flex-shrink-0">
        <img
          src={img}
          alt="Event"
          className="w-40 h-28 object-cover rounded "
        />
      </div>

      {/* Event Details */}
      <div className="text-sm flex flex-col justify-start gap-3 w-full">
        {/* Exact Name */}
        <div className="flex flex-col lg:flex-row  lg:items-start lg:gap-10">
          <span className="font-bold md:block">Event Name:</span>
          <span className="text-gray-700">{name}</span>
        </div>

        {/* Date & Time */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-9">
          <span className="font-bold md:block">Date & Time:</span>
          <span className="text-gray-700">
            {formatDateTimeRange(start_time, end_time)}
          </span>
        </div>

        {/* Venue */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-19">
          <span className="font-bold md:block">Venue:</span>
          <span className="text-gray-700">{location}</span>
        </div>

        {/* Organizer */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-13">
          <span className="font-bold md:block">Organizer:</span>
          <span className="text-gray-700">{event_organizer}</span>
        </div>
      </div>

    </div>
  );
}

export default EventDetailCard;
