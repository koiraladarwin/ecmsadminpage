import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiCalendar, FiChevronRight, FiSettings } from 'react-icons/fi';
import { FaBars } from 'react-icons/fa';
import { IoPeopleOutline } from 'react-icons/io5';
import { TfiSupport } from 'react-icons/tfi';
import { HiOutlineDocumentReport } from 'react-icons/hi';
import { RiTeamLine } from 'react-icons/ri';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { MdOutlineSpaceDashboard } from 'react-icons/md';

const events = [
  { id: 'event-1', label: 'Event 1' },
  { id: 'event-2', label: 'Event 2' },
  { id: 'event-3', label: 'Event 3' },
];

export default function SideBar() {
  const [open, setOpen] = useState("");

  const handleOpen = (input) => {
    if (input == open) {
      setOpen("")
      return
    }
    setOpen(input)
  }

  return (
    <div className="w-64 h-[95vh] bg-sidebar-bg shadow-md overflow-hidden flex flex-col">
      {/* header */}
      <div className="p-4  flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-white mt-2 ">ECMS</h1>
      </div>


      {/* profile circle */}
      <div className="flex flex-col items-center py-4">
        <img
          src="/placeholder.jpg"
          alt="Profile"
          className="w-20 h-20 rounded-full border-2 border-gray-300 bg-gray-100 object-cover"
        />
        <div className="mt-3 text-center text-white text-sm font-medium">
          Hi,Bikram!<br />
          <span className='text-slate-300 leading-relaxed'>Nepal Freight Forwarder Association(NEFFA)</span>
        </div>
      </div>

      {/* navigation */}
      <nav className="flex-1 flex flex-col">
        {/* home */}
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center px-5 py-3 transition ${isActive ? 'bg-sidebar-hover font-semibold text-active-text' : 'text-passive-text hover:bg-gray-100'
            }`
          }
        >

          <MdOutlineSpaceDashboard
            className="mr-3 text-passive-text" size={18}
          />
          Dashboard
        </NavLink>

        {/* events section */}
        <div>
          <NavLink
            to="/event"
            end
            onClick={() => handleOpen("events")}
            className={({ isActive }) =>
              `flex items-center w-full px-5 py-3 font-semibold transition ${isActive
                ? "bg-sidebar-hover text-active-text"
                : "text-passive-text hover:bg-gray-100"
              }`
            }>

            <FiCalendar className="mr-3 text-passive-text" size={18} />
            Events
            <FiChevronRight
              className={`ml-auto transition-transform ${open == 'events' ? 'rotate-90' : ''}`}
              size={18}
            />
          </NavLink>

          {/* events list */}
          {open == "events" && (
            <div className="flex flex-col py-2 space-y-1">
              <NavLink
                to="/event/category"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover font-semibold  text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Category
              </NavLink>

              <NavLink
                to="/event/createvent"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Create Event
              </NavLink>

              <NavLink
                to="/event/session"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Session
              </NavLink>

              <NavLink
                to="/event/invitation"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Invitation
              </NavLink>

              <NavLink
                to="/events/ticket"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Ticket
              </NavLink>
            </div>
          )

          }


        </div>


        {/* people */}
        <div className=''>
          <NavLink
            to="/people"
            end
            onClick={() => handleOpen("people")}
            className={({ isActive }) =>
              `flex items-center w-full px-5 py-3 font-semibold transition ${isActive
                ? "bg-sidebar-hover text-active-text"
                : "text-passive-text hover:bg-gray-100"
              }`
            }
          >
            <IoPeopleOutline className="mr-3 text-passive-text" size={18} />
            People
            <FiChevronRight
              className={`ml-auto transition-transform ${open == "people" ? 'rotate-90' : ''}`}
              size={18}
            />
          </NavLink>
        </div>
        {/* people list */}
        {
          open == "people" && (
            <div className="flex flex-col py-2 space-y-1">
              <NavLink
                to="/people/staff"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Staff/Attendee
              </NavLink>

              <NavLink
                to="/people/enroll"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
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
            `flex items-center px-5 py-3 transition ${isActive ? 'bg-sidebar-hover text-active-text  font-semibold' : 'text-passive-text hover:bg-gray-100'
            }`
          }
        >
          <TfiSupport className="mr-3 text-passive-text" size={18} />
          Support
        </NavLink>

        {/* report */}
        <div className=''>
          <button onClick={() => handleOpen("report")} className="flex items-center w-full px-5 py-3 font-semibold text-passive-text hover:bg-gray-100">
            <HiOutlineDocumentReport className="mr-3 text-passive-text" size={18} />
            Report
            <FiChevronRight
              className={`ml-auto transition-transform ${open == "report" ? 'rotate-90' : ''}`}
              size={18}
            />
          </button>
        </div>
        {/* report list */}
        {
          open == "report" && (
            <div className="flex flex-col py-2 space-y-1">
              <NavLink
                to="/report/checkinreport"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Check-in Report
              </NavLink>

              <NavLink
                to="/report/invitationreport"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Inivitation Report
              </NavLink>

              <NavLink
                to="/report/salesreport"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                Sales Report
              </NavLink>
            </div>
          )

        }


        {/* setting */}
        <div className=''>
          <button onClick={() => handleOpen("settings")} className="flex items-center w-full px-5 py-3 font-semibold text-passive-text hover:bg-gray-100 ">
            <FiSettings className="mr-3 text-passive-text" size={18} />
            Setting
            <FiChevronRight
              className={`ml-auto transition-transform ${open == "settings" ? 'rotate-90' : ''}`}
              size={18}
            />
          </button>
        </div>
        {/* setting list */}
        {
          open == "settings" && (
            <div className="flex flex-col py-2 space-y-1">
              <NavLink
                to="/settings/setting1"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-[var(--color-sidebar-hover)]  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                setting 1
              </NavLink>

              <NavLink
                to="/settings/setting2"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-[var(--color-sidebar-hover)]  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                setting 2
              </NavLink>

              <NavLink
                to="/settings/setting3"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-[var(--color-sidebar-hover)]  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                setting 3
              </NavLink>
            </div>
          )

        }

        {/* finance */}
        <div className=''>
          <button onClick={() => handleOpen("finance")} className="flex items-center w-full px-5 py-3 font-semibold text-passive-text hover:bg-gray-100 ">
            <HiOutlineHomeModern className="mr-3 text-passive-text" size={18} />
            Finance
            <FiChevronRight
              className={`ml-auto transition-transform ${open == "finance" ? 'rotate-90' : ''}`}
              size={18}
            />
          </button>
        </div>
        {/* finance list */}
        {
          open == "finance" && (
            <div className="flex flex-col py-2 space-y-1">
              <NavLink
                to="/finance/finance1"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                finance 1
              </NavLink>

              <NavLink
                to="/finance/finance2"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                finance 2
              </NavLink>

              <NavLink
                to="/finance/finance3"
                className={({ isActive }) =>
                  `ps-25 pe-5 py-2 transition ${isActive ? "bg-sidebar-hover  font-semibold text-active-text" : "text-passive-text hover:bg-gray-100"
                  }`
                }
              >
                finance 3
              </NavLink>
            </div>
          )

        }

        {/* hire team */}
        <NavLink
          to="/hireteam"
          className={({ isActive }) =>
            `flex items-center px-5 py-3 transition ${isActive ? 'bg-sidebar-hover  font-semibold text-active-text' : 'text-passive-text hover:bg-gray-100'
            }`
          }
        >
          <RiTeamLine className="mr-3 text-passive-text" size={18} />
          Hire Team
        </NavLink>
      </nav >

      <div className="mt-auto px-4 py-3 flex flex-col space-y-2 text-gray-500 text-xs">
        <div>v1.0.0</div>
      </div>
    </div >
  );
}

