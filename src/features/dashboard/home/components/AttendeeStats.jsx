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
    { label: 'SPECIAL GUEST', value: 35 },
    { label: 'SPECIAL GUEST', value: 35 },
    { label: 'SPECIAL GUEST', value: 35 },
    { label: 'SPECIAL GUEST', value: 35 },
    { label: 'SPECIAL GUEST', value: 35 },
    { label: 'SPECIAL GUEST', value: 35 },
    { label: 'EXHIBITORS', value: 55 },
  ];

  return (
    <div className="bg-white shadow-lg rounded-3xl w-full flex flex-col">
      <div className="flex items-center bg-primary-dark gap-2 md:gap-4 justify-center py-[29px]">
        <FaChartBar className="text-white" size={20} />
        <h3 className="text-sm md:text-lg font-semibold text-white">
          Attendees Statics
        </h3>
      </div>

      <ul className="text-md min-h-[70%] text-gray-700 bg-gray-100 mt-5 mx-4 px-4 mb-5 rounded-lg pt-5 pb-5 
                   max-h-70 overflow-y-auto">
        {stats.map((item) => (
          <li
            key={item.label}
            className="flex justify-between border-b border-gray-300 pb-2"
          >
            <span className="font-medium">{item.label}</span>
            <span className="font-bold">{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

