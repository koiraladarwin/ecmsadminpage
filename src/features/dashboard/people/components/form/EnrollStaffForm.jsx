import { useEffect, useState } from 'react'
import NormalBtn from '../NormalBtn'
import SearchableDropdown from '../SearchableDropdown'
import CustomDropdown from '../CustomDropDown'
import Swal from 'sweetalert2'
import EnrollList from '../enrolldetail/EnrollList'
import useStaffData from '../../../../../hooks/Use-staffData-list '
import useStaff from '../../../../../hooks/Use-Staff-list'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api, setToken } from '../../../../../axios/Axios'
import { useAuth } from '../../../../auth/context/AuthContext'
import useEventsWithSessionsAndTickets from '../../../../../hooks/Use-EventsWithSession'
import { OrbitProgress } from 'react-loading-indicators'

function EnrollStaffForm() {
  const [formData, setFormData] = useState({
    staff: null,
    event: null,
    session: null,
  })
  const { firebaseToken } = useAuth()
  const queryClient = useQueryClient();
  const {data:enrolledStaffData,isLoading:enrollLoading} = useStaffData();
  const { data: allEvents } = useEventsWithSessionsAndTickets()
  const { data: totalStaff } = useStaff()
  const eventOptions = allEvents?.map(event => ({ label: event.name, id: event.id }))
  const staffOptions = totalStaff?.map(staff => ({ id: staff.id, name: staff.name })) || []
  const [filteredSession, setFilteredSessions] = useState([])

  const mutation = useMutation({
    mutationFn: (data) => {
      setToken(firebaseToken)
      return api.post('/enrollstaff', data)
    },
    onSuccess: async () => {
      await Swal.fire(`Staff Enrolled Successfully!`)
      setFormData({
        staff: null,
        event: null,
        session: null,
      });
      queryClient.invalidateQueries({ queryKey: ['enrolledStaff'] });
    },
    onError: (err) => {
      console.error(err)
      if (err?.response?.status === 400) Swal.fire('Please enter valid inputs')
      else if (err?.response?.status === 401) Swal.fire('Unauthorized! Please login again')
      else if (err?.response?.status === 500) Swal.fire('Server error! Try again later')
      else if (err?.response?.status === 409) Swal.fire('Staff already enrolled!!');
      else Swal.fire('Something went wrong! Please try again later')
    }
  })
  const { mutateAsync: enrollStaff, isPending } = mutation;


  useEffect(() => {
    if (!formData.event) {
      setFilteredSessions([{ label: 'Select event to choose session', value: '', disabled: true }]);
      return;
    }

    const selectedEvent = allEvents?.find(e => e.id === formData.event.id);
    const sessionsForEvent = selectedEvent?.session?.map(s => ({ label: s.name, value: s.id })) || [];

    if (sessionsForEvent.length === 0) {
      setFilteredSessions([{ label: 'No sessions for this event', value: '', disabled: true }]);
    } else {
      setFilteredSessions(sessionsForEvent)
    }

    setFormData(prev => ({ ...prev, session: null }));
  }, [formData.event, allEvents]);

  const handleSelect = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = async () => {
    if (!formData.staff || !formData.event || !formData.session) {
      Swal.fire('Please Fill all the fields!')
      return
    }
    const payload = {
      staff_id: formData.staff.id,
      event_id: formData.event.id,
      session_id: formData.session.value,
    };
    try {
      await enrollStaff(payload)
      await new Promise((res) => setTimeout(res, 500))
    }
    catch (error) {
      if (!error?.response) {
        Swal.fire('Something went wrong, Please try again later!!')
        console.error('Unexpected error:', err)
      } else {
        throw error
      }
    }
  }

  return (
    <div className='w-full bg-white px-10 py-10 border-[1.3px] border-b-sidebar-bg relative'>
      {
        isPending && <div className='absolute inset-0 bg-gray-100 opacity-25 z-50 flex items-center justify-center'>
          <OrbitProgress color="#800080" size="medium" />
        </div>
      }

      <div className='flex flex-col lg:flex-row lg:items-end w-full gap-8'>
        <div className='flex flex-col flex-1'>
          <SearchableDropdown label='Staffs' value={formData.staff} options={staffOptions} onSelect={(staff) => handleSelect('staff', staff)} />
        </div>

        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Events'
            options={eventOptions}
            value={formData.event}
            onSelect={(value) => handleSelect('event', value)}
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:items-end w-full gap-6 py-4'>
        <div className='flex flex-col lg:w-[48%]'>
          <CustomDropdown
            label='Session'
            options={filteredSession}
            value={formData.session}
            onSelect={(value) => handleSelect('session', value)}
          />
        </div>

        <div className='ml-2'>
          <NormalBtn text={isPending ? 'Enrolling' : 'Enroll'} type='primary' onClick={handleSubmit} disabled={isPending} />
        </div>

      </div>
      <EnrollList data={enrolledStaffData} type="staff" isLoading={enrollLoading}/>
    </div>
  )
}

export default EnrollStaffForm