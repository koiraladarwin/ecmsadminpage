import { useState, useEffect, useCallback } from 'react';
import { FaUser } from 'react-icons/fa';
import ReportComposedChart from './components/ReportComposedChart';
import useEventsWithSessionsAndTickets from '../../../../hooks/Use-EventsWithSession';
import useAttendeeData from '../../../../hooks/Use-attendeeData-list';
import Swal from 'sweetalert2';
import { formatDateTimeRange } from '../../event/invitations/components/EventDetailCard';

function CheckinReportPage() {
  const ITEMS_PER_PAGE = 5;
  const { data: events } = useEventsWithSessionsAndTickets() || [];
  const { data: enrolledAttendees } = useAttendeeData() || [];
  const [selectedEvent, setSelectedEvent] = useState(null);


  const [sessions] = useState([
    { id: 'all', name: 'ALL' },
    { id: 's1', name: 'Session 1' },
    { id: 's2', name: 'Session 2' },
  ]);

  const [statusOptions] = useState(['ALL', 'Checked - in', 'Not Checked - in']);
  const [sortOptions] = useState(['Full Name', 'Company', 'Entry']);

  const [selectedSession, setSelectedSession] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('ALL');
  const [sortBy, setSortBy] = useState('Full Name');
  const [reportData, setReportData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleGenerate = () => {
    Swal.fire('Report Generated')
    if (!selectedEvent) return;
    const filteredAttendeesData = enrolledAttendees?.filter((att) => att.event_id === selectedEvent.id && att.type === 'invitation').filter((item, index, self) => index === self.findIndex(o => o.attendee_id === item.attendee_id))
    const finalReportData = filteredAttendeesData.map((att) => ({
      id: att.auto_id,
      fullname: att.attendee_name,
      organization: selectedEvent.event_organizer,
      entry: att.entry,
      sessions: enrolledAttendees?.map(attendee => {
        if(attendee.attendee_id == att.attendee_id && attendee.event_id == selectedEvent.id) {
          const session = selectedEvent?.session.find(sess => {return sess.name.toLowerCase() == attendee.session_name.toLowerCase()})
            return {
              name: session.name,
              time: session.start_time
            }
        }
        return null
      }).filter(item => item != null)
    }))
    setReportData(finalReportData)
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(reportData.length / ITEMS_PER_PAGE);
  const paginatedData = reportData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );
  // Prepare data for the bar chart
  const barData = useCallback(() => {
    const data = {}
    reportData.forEach(item => {
      const entryType = item.entry
      if (!data[entryType]) {
        data[entryType] = 1
      } else {
        data[entryType] = data[entryType] + 1
      }
    })
    const result = []
    for (const key in data) {
      result.push({ type: key, sent: data[key], checkedIn: reportData.filter(data => data.checkedIn && data.entryType == key).length })
    }
    return result
  }, [reportData])

  return (
    <div className="p-14">
      <h2 className="text-xl mb-4">Generate Report</h2>

      <div className="bg-white p-10 border-2">
        {/* Filters */}
        <h1 className='text-2xl mb-4 textBold'>Invitation Report</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 sm:grid-cols-1 mb-4">
          {/* Event */}
          <div>
            <label className="block font-medium mb-1">Choose Event</label>
            <select
              className="w-full border px-3 py-2 rounded focus:outline-none"
              value={selectedEvent?.id || ''}
              onChange={(e) => {
                setSelectedEvent(events?.find((ev) => ev.id === e.target.value))
              }
              }
            >
              <option value="" disabled className='text-gray-200'>
                Select Event
              </option>
              {events?.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.name}
                </option>
              ))}
            </select>
          </div>

          {/* Session */}
          <div>
            <label className="block font-medium mb-1">Choose Session</label>
            <select
              className="w-full border px-3 py-2 rounded focus:outline-none"
              value={selectedSession}
              onChange={(e) => setSelectedSession(e.target.value)}
            >
              {sessions?.map((session) => (
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
              className="w-full border px-3 py-2 rounded focus:outline-none"
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
              className="w-full border px-3 py-2 rounded focus:outline-none"
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
          className={`px-6 py-2 ${selectedEvent ? 'bg-purple-600 text-white hover' : ' bg-gray-200 text-gray-500 cursor-not-allowed'}`}
          disabled={!selectedEvent}
        >
          Generate
        </button>

        {/* Event Info */}
        {reportData.length > 0 &&
          <div className='flex flex-col lg:flex-row md:border md:px-8 mt-6 md:py-6 py-10  rounded md:bg-gray-50'>
            <div className=" px-4 text-sm text-gray-700 flex-1">
              <img
                src="https://guestpix.com/wp-content/uploads/woocommerce-placeholder-600x600.png"
                alt="Logo"
                className="w-30 h-30 rounded md"
              />
              <div className="font-bold text-base mt-6 mb-2 flex items-center gap-2">
                <span className='text-xl'> {selectedEvent ? selectedEvent.name : "-"}</span>
              </div>
              <div>
                <strong>Date & Time:</strong> {selectedEvent ? formatDateTimeRange(selectedEvent.start_time, selectedEvent.end_time) : '-'}
              </div>
              <div>
                <strong>Venue:</strong> {selectedEvent ? selectedEvent.location : "-"}
              </div>
              <div>
                <strong>Organizer:</strong> {selectedEvent ? selectedEvent.event_organizer : "-"}
              </div>
            </div>
            {/* bar graph */}
            <div className='w-full flex-1'>
              {/* <ReportBarGraph data={barData} title="Invitation Type Graph" /> */}
              <ReportComposedChart data={barData()} title="Invitation Type Graph" />
            </div>
          </div>
        }

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
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                    No any enrolled attendees for report .
                  </td>
                </tr>
              ) :
                paginatedData.map((entry, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 hover:shadow-sm transition duration-150"
                  >
                    <td className="px-4 py-3">{entry.id}</td>
                    <td className="px-4 py-3 ">
                      <div className="flex gap-2">
                        <FaUser className="text-purple-600" /> {entry.fullname}
                      </div>
                    </td>
                    <td className="px-4 py-3">{entry.organization}</td>
                    <td className="px-4 py-3">{entry.entry}</td>
                    <td className="px-4 py-3 space-y-1">
                      {entry.sessions.map((session, index) => (
                        <div key={index} className="text-gray-700">
                          <span className="font-medium">{session.name}</span> —{' '}
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

export default CheckinReportPage;
