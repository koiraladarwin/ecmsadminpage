import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiCalendar, FiChevronRight, FiSettings } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import { TfiSupport } from 'react-icons/tfi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { RiTeamLine } from 'react-icons/ri';
import { HiOutlineHomeModern } from 'react-icons/hi2';

const events = [
  { id: 'event-1', label: 'Event 1' },
  { id: 'event-2', label: 'Event 2' },
  { id: 'event-3', label: 'Event 3' },
];

export default function SideBar() {
  const [eventsOpen, setEventsOpen] = useState(true);
  const [open, setOpen] = useState("");

  return (
    <div className="w-64 bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
      {/* header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <div className="text-xl font-semibold text-orange-500">ECMS</div>
        <FaBars className='text-gray-500' />
      </div>


      {/* profile circle */}
      <div className="flex flex-col items-center py-6 border-b border-gray-200">
        <img
          src="/placeholder.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300 bg-gray-100 object-cover"
        />
        <div className="mt-3 text-center text-gray-700 text-sm font-medium">
          Welcome<br />Darwin Koirala
        </div>
      </div>

      {/* navigation */}
      <nav className="flex-1 flex flex-col">
        {/* home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center px-5 py-3 border-b border-gray-200 hover:bg-gray-100 transition ${isActive ? 'bg-gray-200 font-semibold' : ''
            }`
          }
        >
          <FiHome className="mr-3 text-gray-600" size={18} />
          Dashboard
        </NavLink>

        {/* events section */}
        <div className="border-b border-gray-200">
          <button
            onClick={() => setEventsOpen(!eventsOpen)}
            className="flex items-center w-full px-5 py-3 font-semibold text-gray-800 hover:bg-gray-100 border-b border-gray-200"
          >
            <FiCalendar className="mr-3 text-gray-600" size={18} />
            Events
            <FiChevronRight
              className={`ml-auto transition-transform ${eventsOpen ? 'rotate-90' : ''}`}
              size={18}
            />
          </button>

          {/* events list */}

          {eventsOpen && (
            <div className="relative py-2 space-y-4">
              <div className='h-[calc(100%-8px)] w-[2px] bg-gray-400 absolute ml-[77px] top-0'></div>
              <div className='mt-2 space-y-1'>
                {events.map((event) => (
                  <NavLink
                    key={event.id}
                    to={`/events/${event.id}`}
                    className={({ isActive }) =>
                      `group flex gap-2 items-center relative py-2 pl-18 text-sm text-gray-700 ${isActive ? 'font-semibold' : ''
                      }`
                    }
                  >
                    <span className="h-3 w-3 rounded-full bg-gray-400 group-hover:bg-black transition-colors duration-200"></span>
                    <span className="text-gray-500 font-medium text-lg">{event.label}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          )}

        </div>


        {/* people */}
        <div className='border-t border-gray-200'>
          <button onClick={() => setOpen("people")} className="flex items-center w-full px-5 py-3 font-semibold text-gray-800 hover:bg-gray-100 border-b border-gray-200">
            <IoPeopleOutline className="mr-3 text-gray-600" size={18} />
            People
            <FiChevronRight
              className={`ml-auto transition-transform ${open == "people" ? 'rotate-90' : ''}`}
              size={18}
            />
          </button>
        </div>
        {/* people list */}
        {open == "people" && (
          <div className="flex flex-col ml-10 py-2 space-y-1">
            <NavLink
              to="/people/staff"
              className={({ isActive }) =>
                `px-5 py-2 hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold text-black" : "text-gray-700"
                }`
              }
            >
              Staff/Attendee
            </NavLink>

            <NavLink
              to="/people/enroll"
              className={({ isActive }) =>
                `px-5 py-2 hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold text-black" : "text-gray-700"
                }`
              }
            >
              Enroll
            </NavLink>
          </div>
        )

        }

        {/* support */}
        <NavLink
          to="/support"
          className={({ isActive }) =>
            `flex items-center px-5 py-3 border-t border-gray-200 hover:bg-gray-100 transition ${isActive ? 'bg-gray-200 font-semibold' : ''
            }`
          }
        >
          <TfiSupport className="mr-3 text-gray-600" size={18} />
          Support
        </NavLink>

        {/* report */}
        <div className='border-t border-gray-200'>
          <button onClick={() => setOpen("report")} className="flex items-center w-full px-5 py-3 font-semibold text-gray-800 hover:bg-gray-100 border-b border-gray-200">
            <HiOutlineDocumentReport className="mr-3 text-gray-600" size={18} />
            Report
            <FiChevronRight
              className={`ml-auto transition-transform ${open == "report" ? 'rotate-90' : ''}`}
              size={18}
            />
          </button>
        </div>
        {/* report list */}
        {open == "report" && (
          <div className="flex flex-col ml-10 py-2 space-y-1">
            <NavLink
              to="/report/checkinreport"
              className={({ isActive }) =>
                `px-5 py-2 hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold text-black" : "text-gray-700"
                }`
              }
            >
              Check-in Report
            </NavLink>

            <NavLink
              to="/report/invitationreport"
              className={({ isActive }) =>
                `px-5 py-2 hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold text-black" : "text-gray-700"
                }`
              }
            >
              Inivitation Report
            </NavLink>

            <NavLink
              to="/report/salesreport"
              className={({ isActive }) =>
                `px-5 py-2 hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold text-black" : "text-gray-700"
                }`
              }
            >
              Sales Report
            </NavLink>
          </div>
        )

        }


        {/* setting */}
        <div className='border-t border-gray-200'>
          <button onClick={() => setOpen("settings")} className="flex items-center w-full px-5 py-3 font-semibold text-gray-800 hover:bg-gray-100 border-b border-gray-200">
            <FiSettings className="mr-3 text-gray-600" size={18} />
            Setting
            <FiChevronRight
              className={`ml-auto transition-transform ${open == "settings" ? 'rotate-90' : ''}`}
              size={18}
            />
          </button>
        </div>
        {/* setting list */}
        {open == "settings" && (
          <div className="flex flex-col ml-10 py-2 space-y-1">
            <NavLink
              to="/settings/setting1"
              className={({ isActive }) =>
                `px-5 py-2 hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold text-black" : "text-gray-700"
                }`
              }
            >
              setting 1
            </NavLink>

            <NavLink
              to="/settings/setting2"
              className={({ isActive }) =>
                `px-5 py-2 hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold text-black" : "text-gray-700"
                }`
              }
            >
              setting 2
            </NavLink>

            <NavLink
              to="/settings/setting3"
              className={({ isActive }) =>
                `px-5 py-2 hover:bg-gray-100 transition ${isActive ? "bg-gray-200 font-semibold text-black" : "text-gray-700"
                }`
              }
            >
              setting 3
            </NavLink>
          </div>
        )

        }

        {/* finance */}
        <NavLink
          to="/finance"
          className={({ isActive }) =>
            `flex items-center px-5 py-3 border-t border-gray-200 hover:bg-gray-100 transition ${isActive ? 'bg-gray-200 font-semibold' : ''
            }`
          }
        >
          <HiOutlineHomeModern className="mr-3 text-gray-600" size={18} />
          Finance
        </NavLink>

        {/* hire team */}
        <NavLink
          to="/hireteam"
          className={({ isActive }) =>
            `flex items-center px-5 py-3 border-t border-gray-200 hover:bg-gray-100 transition ${isActive ? 'bg-gray-200 font-semibold' : ''
            }`
          }
        >
          <RiTeamLine className="mr-3 text-gray-600" size={18} />
          Hire Team
        </NavLink>
      </nav>

      <div className="mt-auto px-4 py-3 border-t border-gray-200 flex flex-col space-y-2 text-gray-500 text-xs">
        <div>v1.0.0</div>
      </div>
    </div>
  );
}

