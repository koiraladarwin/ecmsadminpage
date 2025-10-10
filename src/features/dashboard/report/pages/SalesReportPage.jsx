import { useState, useEffect, useCallback } from 'react';
import { FaUser } from 'react-icons/fa';
import ReportPieChart from './components/ReportPieChart';
import ReportComposedChart from './components/ReportComposedChart';

function SalesReportPage() {
  const ITEMS_PER_PAGE = 25;

  const [events] = useState([
    { id: 1, name: '31st Cargo Day 2025' },
    { id: 2, name: 'Teej Mela 2082' },
  ]);

  const [sessions] = useState([
    { id: 'all', name: 'ALL' },
    { id: 's1', name: 'Session 1' },
    { id: 's2', name: 'Session 2' },
  ]);

  const [statusOptions] = useState(['ALL', 'Checked - in', 'Not Checked - in']);
  const [sortOptions] = useState(['Full Name', 'Company', 'Entry']);

  const [selectedEvent, setSelectedEvent] = useState(events[0]);
  const [selectedSession, setSelectedSession] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [sortBy, setSortBy] = useState('Full Name');
  const [reportData, setReportData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const baseData = [
      {
        id: 'INV-001',
        fullName: 'Mr. Lee Yang',
        organization: 'XYZ Company Pvt. Ltd.',
        entryType: 'Invitation',
        sessions: [
          { name: 'Inauguration', time: '2025-01-29 09:17:10' },
          { name: 'Lunch', time: '2025-01-29 14:28:07' },
          { name: 'Cargo Interaction', time: '2025-01-29 16:00:26' },
        ],
      },
    ];

    const extended = Array.from({ length: 100 }, (_, i) => ({
      ...baseData[0],
      id: `INV-${String(i + 1).padStart(3, '0')}`,
      fullName: `Mr. Lee Yang ${i + 1}`,
      ticketType: i % 2 == 0 ? "Type 1" : i % 3 == 0 ? "Type 3" : "Type 2",
      paidStatus: i % 4 == 0 ? true : false
    }));
    setReportData(extended);
  }, []); const handleGenerate = () => {
    console.log('Generate report with:', {
      selectedEvent,
      selectedSession,
      selectedStatus,
      sortBy,
    });
    setCurrentPage(1);
  };

  const barData = useCallback(() => {
    const data = {}
    reportData.forEach(item => {
      const ticketType = item.ticketType
      if (!data[ticketType]) {
        data[ticketType] = 1
      } else {
        data[ticketType] = data[ticketType] + 1
      }
    })
    const result = []
    for (const key in data) {
      result.push({ type: key, count: data[key], enroll: Math.floor(Math.random() * 10) })
    }
    return result
  }, [reportData])


  const paidStatus = [
    { name: "Paid", value: reportData.filter(d => d.paidStatus).length },
    { name: "Unpaid", value: reportData.filter(d => !d.paidStatus).length },
  ];

  const totalPages = Math.ceil(reportData.length / ITEMS_PER_PAGE);
  const paginatedData = reportData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="p-14">
      <h2 className="text-xl mb-4">Generate Report</h2>

      <div className="bg-white p-10 border-2">
        {/* Filters */}
        <h1 className='text-2xl mb-4 textBold'>Sales Report</h1>
        <div className="grid md:grid-cols-4 gap-4 mb-4">
          {/* Event */}
          <div>
            <label className="block font-medium mb-1">Choose Event</label>
            <select
              className="w-full border px-3 py-2 rounded"
              value={selectedEvent.name}
              onChange={(e) =>
                setSelectedEvent(events.find((ev) => ev.name === e.target.value))
              }
            >
              {events.map((event) => (
                <option key={event.id} value={event.name}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>

          {/* Session */}
          <div>
            <label className="block font-medium mb-1">Choose Session</label>
            <select
              className="w-full border px-3 py-2 rounded"
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
            >
              {sessions.map((session) => (
                <option key={session.id} value={session.id}>
                  {session.name}
                </option>
              ))}
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block font-medium mb-1">Status</label>
            <select
              className="w-full border px-3 py-2 rounded"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              {statusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div>
            <label className="block font-medium mb-1">Sort by</label>
            <select
              className="w-full border px-3 py-2 rounded"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
        >
          Generate
        </button>

        {/* Event Info */}
        <div className="grid-cols-3 md:grid border mt-6 bg-gray-50 p-4 rounded">
          {/* Event Info */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start px-4 md:col-span-1 ">
            <img
              src="https://guestpix.com/wp-content/uploads/woocommerce-placeholder-600x600.png"
              alt="Logo"
              className="w-30 h-30 rounded mb-4"
            />
            <div className="text-sm text-gray-700">
              <div className="font-bold text-xl mb-2">{selectedEvent.name}</div>
              <div><strong>Date & Time:</strong> 27th July 2025 10:00 AM to 6:00 PM</div>
              <div><strong>Venue:</strong> Hotel Hyatt Regency Kathmandu</div>
              <div><strong>Organizer:</strong> Nepal Freight & Forwarders Association (NEFFA)</div>
            </div>
          </div>

          {/* Charts */}
          <div className="col-span-2 flex flex-col md:flex-row gap-2 overflow-x-auto md:overflow-x-visible items-center">
            <div className="w-full">
              {/* <ReportBarGraph title="Ticket Types Status" data={barData()} /> */}
              <ReportComposedChart title="Ticket Types Status" data={barData()} barKey='count' lineKey='enroll' barName='Ticket-Type' lineName='Enrolled'/>
            </div>
            <div className="w-full">
              <ReportPieChart title="Payment Status" data={paidStatus} />
            </div>
          </div>
        </div>



        {/* Modern Report Table */}
        <div className="mt-6 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full text-sm text-gray-800">
            <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Full Name</th>
                <th className="px-4 py-3 text-left">Company/Organization</th>
                <th className="px-4 py-3 text-left">Entry</th>
                <th className="px-4 py-3 text-left">Sessions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {paginatedData.map((entry) => (
                <tr
                  key={entry.id}
                  className="hover:bg-gray-50 hover:shadow-sm transition duration-150"
                >
                  <td className="px-4 py-3">{entry.id}</td>
                  <td className="px-4 py-3 ">
                    <div className="flex gap-2">
                      <FaUser className="text-purple-600" /> {entry.fullName}
                    </div>
                  </td>
                  <td className="px-4 py-3">{entry.organization}</td>
                  <td className="px-4 py-3">{entry.entryType}</td>
                  <td className="px-4 py-3 space-y-1">
                    {entry.sessions.map((session, index) => (
                      <div key={index} className="text-gray-700">
                        <span className="font-medium">{session.name}</span> —
                        <span className="text-gray-500">{session.time}</span>
                      </div>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>        </div>        {/* Pagination */}
        <div className="mt-4 flex justify-center items-center gap-2 text-sm">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded ${currentPage === i + 1
                ? 'bg-purple-600 text-white'
                : 'text-gray-600 hover:bg-gray-200'
                }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SalesReportPage;
