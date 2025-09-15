export default function AttendeeStats() {
  const stats = [
    { label: 'INVITATION', value: 54 },
    { label: 'TICKET', value: 1234 },
    { label: 'BOD MEMBER', value: 14 },
    { label: 'MEMBER', value: 12 },
    { label: 'STAFF TEAM', value: 4 },
    { label: 'TECH TEAM', value: 6 },
    { label: 'VOLUNTEER', value: 8 },
    { label: 'SPECIAL GUEST', value: 35 },
    { label: 'EXHIBITORS', value: 55 },
  ];

  return (
    <div className="bg-white shadow rounded-3xl p-4">
      <h3 className="font-bold mb-2">Attendees Statics</h3>
      <ul className="text-sm space-y-1">
        {stats.map((item) => (
          <li key={item.label}>
            {item.label}: {item.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
