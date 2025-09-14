import { useParams } from 'react-router-dom';

export default function EventPage() {
  const { eventId } = useParams();

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800">Event: {eventId}</h2>
      <p className="text-gray-600">Details for this event are dynamically loaded.</p>
    </div>
  );
}
