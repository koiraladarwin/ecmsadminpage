import { FaSearch } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import PersonListCard from './PersonListCard'
import { useLocation, useNavigate } from 'react-router-dom'
import useStaff from '../../../../../../hooks/Use-Staff-list'
import useAttendee from '../../../../../../hooks/Use-attendee-list'
import { OrbitProgress } from 'react-loading-indicators'
import { useEffect } from 'react'

const PeopleDisplay = ({ activeTab, setActiveTab }) => {

  const { data: totalAttendees, isLoading: totalAttendeesLoading } = useAttendee()
  const { data: totalStaff, isLoading: totalStaffLoading } = useStaff()
  const { state } = useLocation()

  useEffect(() => {
    if (state) setActiveTab(state)
  }, [state])

  const dataToShow = activeTab === "staff" ? totalStaff : totalAttendees
  const navigate = useNavigate()
  return (
    <div className='w-full'>
      <div className='w-full flex justify-between'>
        <div className='flex bg-white rounded-tl-xl rounded-tr-xl border-l border-t border-r border-gray-800 border-solid'>
          <button className={` ps-7 pe-14 py-1  font-semibold rounded-tl-xl rounded-tr-xl ${activeTab === 'staff' ? 'bg-sidebar-hover text-white' : 'text-gray-700'}`} onClick={() => setActiveTab("staff")}>Staffs</button>
          <button className={`ps-7 pe-14 py-1  font-semibold rounded-tl-xl rounded-tr-xl ${activeTab === 'attendee' ? 'bg-sidebar-hover text-white' : 'text-gray-700'}`} onClick={() => setActiveTab("attendee")}>Attendees</button>
        </div>
        <div className='flex gap-3'>
          <button className={'flex items-center gap-1 px-2 h-[25px] pe-5 font-semibold rounded-full transition text-xs text-white bg-sidebar-hover cursor-pointer'} onClick={() => navigate("/people/staff/addstaff")}>
            <FiPlus size={12} />
            <span className='hidden md:block'>
              Add Staff/Attendee
            </span>
          </button>
          <button className={'flex items-center gap-1 px-2 h-[25px] pe-5 font-semibold rounded-full transition text-xs text-black bg-white border border-gray-800 border-solid cursor-pointer'}>
            <FiPlus size={12} />
            <p className='hidden md:block'>
              Import <span className='text-[10px]'>(csv file only)</span>
            </p>
          </button>
        </div>
      </div>
      <div className='w-full bg-white border border-gray-800 border-solid rounded-sm py-8 px-12'>
        <div className='w-full flex flex-col md:flex-row justify-between border-b border-gray-800 border-solid pb-7 items-center'>
          <div className="relative w-fit">
            <input
              type="text"
              placeholder={`${activeTab === 'staff' ? 'Search for staff' : 'Search for attendee'}`}
              className="rounded-xs focus:outline-none text-md"
              style={{ padding: '2px 15px 2px 10px', border: '1.9px solid rgba(128,128,128,0.3)' }}
            />
            <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-2 gap-5'>
          {
            totalAttendeesLoading || totalStaffLoading ? <div className='col-span-full flex justify-center items-center '><OrbitProgress color="#800080" size="medium" /></div> :
              <>
                {dataToShow?.map((person) => (
                  <PersonListCard key={person.id} person={person} activeTab={activeTab} />
                ))}
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default PeopleDisplay