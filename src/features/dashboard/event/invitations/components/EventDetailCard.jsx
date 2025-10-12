function EventDetailCard(props) {
  const { img, eventname, startdate, starttime, enddate, endtime, venue, organizer } = props;

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
          <span className="font-bold md:block">Exact Name:</span>
          <span className="text-gray-700">{eventname}</span>
        </div>

        {/* Date & Time */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-9">
          <span className="font-bold md:block">Date & Time:</span>
          <span className="text-gray-700">
            {startdate} {starttime} - {enddate} {endtime}
          </span>
        </div>

        {/* Venue */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-19">
          <span className="font-bold md:block">Venue:</span>
          <span className="text-gray-700">{venue}</span>
        </div>

        {/* Organizer */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-13">
          <span className="font-bold md:block">Organizer:</span>
          <span className="text-gray-700">{organizer}</span>
        </div>
      </div>

    </div>
  );
}

export default EventDetailCard;
