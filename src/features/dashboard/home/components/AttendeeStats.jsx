import { FaChartBar } from "react-icons/fa";  

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
    <div className="bg-white shadow-lg rounded-3xl max-w-sm  mx-auto">
      <div className="flex items-center mb-4 bg-primary-dark px-6 h-[85px]">
        <FaChartBar className="text-white mr-2" />
        <h3 className="text-lg font-semibold text-white uppercase">Attendees Statics</h3>
      </div>
      <ul className="text-sm space-y-3 text-gray-700 px-6">
        {stats.map((item) => (
          <li key={item.label} className="flex justify-between">
            <span className="font-medium">{item.label}</span>
            <span className="font-bold">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

