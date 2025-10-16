import { FaSearch } from 'react-icons/fa'
import { FiPlus } from 'react-icons/fi'
import PersonListCard from './PersonListCard'
import { useLocation, useNavigate } from 'react-router-dom'
import useStaff from '../../../../../../hooks/Use-Staff-list'
import useAttendee from '../../../../../../hooks/Use-attendee-list'
import useAttendeeCategory from '../../../../../../hooks/Use-attendeeCategory-list'
import { OrbitProgress, ThreeDot } from 'react-loading-indicators'
import { useEffect, useState } from 'react'
import Papa from 'papaparse'
import Swal from 'sweetalert2'
import { useMutation } from '@tanstack/react-query'
import { api, setToken } from '../../../../../../axios/Axios'
import { useAuth } from '../../../../../auth/context/AuthContext'
import CsvTable from '../../csvfiledisplay/CsvTable'

const PeopleDisplay = ({ activeTab, setActiveTab }) => {

  const { data: totalAttendees, isLoading: totalAttendeesLoading } = useAttendee()
  const { data: totalStaff, isLoading: totalStaffLoading } = useStaff()
  const { data: attendeeCategory } = useAttendeeCategory()
  const { firebaseToken } = useAuth()
  const { state } = useLocation()
  const [csvData, setCsvData] = useState([])
  const [csvLoading, setCsvLoading] = useState(false)
  const [showCsvTable, setShowCsvTable] = useState(false)
  const [search, setSearch] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  const navigate = useNavigate()

  const dataToShow = activeTab === "staff" ? totalStaff || [] : totalAttendees || []

  useEffect(() => {
    if (state) setActiveTab(state)
  }, [state])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search)
    }, 300);

    return () => clearTimeout(timeout)
  }, [search])


  const mutation = useMutation({
    mutationFn: (payload) => {
      const { category, ...data } = payload
      setToken(firebaseToken);
      return api.post('/attendee', data);
    },
  });

  const { mutateAsync: createAttendee } = mutation;

  const handleCsvFile = async (e) => {
    try {
      const file = e.target.files[0];
      if (!file) return;
      setCsvData([]);

      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: async (results) => {
          const firstElement = results.data[0];
          if (
            !firstElement?.full_name ||
            !firstElement.phone_number ||
            !firstElement?.category ||
            !firstElement?.gmail
          ) {
            Swal.fire(
              "The columns should be named full_name, phone_number, category, gmail, company(if exists), position(if exists)"
            );
            return;
          }

          setCsvLoading(true);


          const cleanData = results.data.filter(
            (row) => row.full_name && row.phone_number && row.category && row.gmail
          );


          for (const data of cleanData) {
            let { full_name, phone_number, category, gmail, company, position } = data;
            const cat = attendeeCategory.find((cat) => cat.tag === category);

            full_name = full_name?.trim();
            phone_number = phone_number?.trim();
            category = category?.trim();
            gmail = gmail?.trim();
            company = company?.trim() || "";
            position = position?.trim() || "";

            try {
              await createAttendee({
                full_name,
                phone_number,
                gmail,
                company,
                position,
                attendee_category_id: cat?.id || "",
                category,
              });

              setCsvData((prev) => [...prev, { ...data, success: true }]);
            } catch (err) {
              console.log("error in csv file upload", err);
              setCsvData((prev) => [...prev, { ...data, success: false }]);
            }
          }

          setCsvLoading(false);
          setShowCsvTable(true);

          e.target.value = "";
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  if (showCsvTable) {
    return (<div>
      <div>
        <CsvTable setShow={setShowCsvTable} data={csvData} />
      </div>
    </div>)
  }

  const filteredData = !totalStaffLoading && !totalAttendeesLoading
    ? dataToShow.filter((person) => {
      const name = activeTab === "staff" ? person?.name : person?.full_name
      return name?.toLowerCase().includes(debouncedSearch.toLowerCase())
    })
    : []

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
          {
            activeTab === "staff" ? "" :
              <>
                <label className={'flex items-center gap-1 px-2 h-[25px] pe-5 font-semibold rounded-full transition text-xs text-black bg-white border border-gray-800 border-solid cursor-pointer'} htmlFor='csv'>
                  <FiPlus size={12} />
                  <p className='hidden lg:block'>
                    Import <span className='text-[10px]'>(csv file only)</span>
                  </p>
                  <input type="file" accept='.csv' id='csv' className='hidden' onChange={handleCsvFile} />
                </label>
              </>
          }
        </div>
      </div>
      <div className='w-full bg-white border border-gray-800 border-solid rounded-sm py-8 px-12 relative'>
        {
          csvLoading && <div className='absolute inset-0 bg-gray-200/25 z-50 flex pt-60 justify-center'>
            <div>
              <div className="flex items-center gap-6">
                <span className="font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-pulse scale-105 drop-shadow-md">
                  Importing CSV files
                </span>
                <ThreeDot
                  color={["#a855f7", "#ec4899", "#6366f1"]}
                  size="small"
                />
              </div>
            </div>
          </div>
        }
        <div className='w-full flex flex-col md:flex-row justify-between border-b border-gray-800 border-solid pb-7 items-center'>
          <div className="relative w-fit">
            <input
              type="text"
              placeholder={`${activeTab === 'staff' ? 'Search for staff' : 'Search for attendee'}`}
              className="rounded-xs focus:outline-none text-md "
              style={{ padding: '2px 26px 2px 10px', border: '1.9px solid rgba(128,128,128,0.3)' }}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-4 px-2 gap-5'>
          {
            totalAttendeesLoading || totalStaffLoading ? <div className='col-span-full flex justify-center items-center '><OrbitProgress color="#800080" size="medium" /></div> :
              <>
                {
                  filteredData && filteredData.length > 0 ?
                    filteredData.map((person) => (
                      <PersonListCard key={person.id} person={person} activeTab={activeTab} />
                    ))
                    :
                    <div className="col-span-full text-center text-2xl text-gray-500 mt-10">No results found.</div>
                }
              </>
          }
        </div>
      </div>
    </div>
  )
}

export default PeopleDisplay