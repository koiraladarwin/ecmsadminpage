import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import PersonListCard from './PersonListCard'
import { useNavigate } from 'react-router-dom'

const staffDummyData = [
  { id: 1, name: "Mr. Carlos Cole", role: "Risk Analyst", company: "Biz Tech Pvt. Ltd.", image: "/placeholder.jpg" },
  { id: 2, name: "Ms. Sarah Lee", role: "Software Engineer", company: "Innovate Solutions", image: "/placeholder.jpg" },
  { id: 3, name: "Mr. John Doe", role: "UI/UX Designer", company: "Pixel Studio", image: "/placeholder.jpg" },
  { id: 4, name: "Mrs. Emily Davis", role: "Project Manager", company: "NextGen IT", image: "/placeholder.jpg" },
  { id: 5, name: "Mr. Michael Smith", role: "HR Manager", company: "Global HR Ltd.", image: "/placeholder.jpg" },
  { id: 6, name: "Ms. Olivia Brown", role: "Marketing Specialist", company: "Brandify Media", image: "/placeholder.jpg" },
  { id: 7, name: "Mr. Daniel Wilson", role: "Business Analyst", company: "Growth Corp", image: "/placeholder.jpg" },
  { id: 8, name: "Ms. Sophia Miller", role: "Data Scientist", company: "Insight Labs", image: "/placeholder.jpg" },
  { id: 9, name: "Mr. Ethan Taylor", role: "Sales Executive", company: "MarketEdge", image: "/placeholder.jpg" },
]

const attendeeDummyData = [
  { id: 1, name: "Mr. person1", role: "Financial Advisor", company: "Summit Capital", image: "/placeholder.jpg" },
  { id: 2, name: "Ms. person2", role: "Frontend Developer", company: "CodeWave Solutions", image: "/placeholder.jpg" },
  { id: 3, name: "Mr. person3", role: "Graphic Designer", company: "Creative Hive", image: "/placeholder.jpg" },
  { id: 4, name: "Mrs. person4", role: "Operations Manager", company: "Prime Logistics", image: "/placeholder.jpg" },
  { id: 5, name: "Mr. person5", role: "Recruitment Lead", company: "TalentWorks Ltd.", image: "/placeholder.jpg" },
  { id: 6, name: "Ms. person6", role: "Content Strategist", company: "Storyline Media", image: "/placeholder.jpg" },
  { id: 7, name: "Mr. person7", role: "Product Analyst", company: "VisionTech Inc.", image: "/placeholder.jpg" },
  { id: 8, name: "Ms. person8", role: "Machine Learning Engineer", company: "AI Nexus Labs", image: "/placeholder.jpg" },
  { id: 9, name: "Mr. person9", role: "Account Executive", company: "TradeBridge", image: "/placeholder.jpg" },
];


const PeopleDisplay = ({ activeTab, setActiveTab }) => {
  const dataToShow = activeTab === "staff" ? staffDummyData : attendeeDummyData
  const navigate = useNavigate()
  return (
    <div className='w-full'>
      <div className='w-full flex justify-between'>
        <div className='flex bg-white rounded-tl-xl rounded-tr-xl border-l border-t border-r border-gray-800 border-solid'>
          <button className={` ps-7 pe-14 py-1  font-semibold rounded-tl-xl rounded-tr-xl ${activeTab === 'staff' ? 'bg-sidebar-hover text-white' : 'text-gray-700'}`} onClick={() => setActiveTab("staff")}>Staffs</button>
          <button className={`ps-7 pe-14 py-1  font-semibold rounded-tl-xl rounded-tr-xl ${activeTab === 'attendee' ? 'bg-sidebar-hover text-white' : 'text-gray-700'}`} onClick={() => setActiveTab("attendee")}>Attendees</button>
        </div>
        <div className='flex gap-3'>
          <button className={'flex items-center gap-1 px-2 h-[25px] pe-5 font-semibold rounded-full transition text-xs text-white bg-sidebar-hover cursor-pointer'} onClick={() => navigate("/people/staff/add")}>
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
          <span className='underline'>Download QR</span>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-2 gap-5'>
          {dataToShow.map((person) => (
            <PersonListCard key={person.id} person={person} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PeopleDisplay