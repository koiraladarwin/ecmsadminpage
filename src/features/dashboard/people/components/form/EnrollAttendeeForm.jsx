import { useEffect, useState } from 'react'
import SearchableDropdown from '../SearchableDropdown'
import CustomDropdown from '../CustomDropDown'
import NormalBtn from '../NormalBtn'
import Swal from 'sweetalert2'
import EnrollList from '../enrolldetail/EnrollList'
import useAttendeeData from '../../../../../hooks/Use-attendeeData-list'
import useAttendee from '../../../../../hooks/Use-attendee-list'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { api, setToken } from '../../../../../axios/Axios'
import useEventsWithSessionsAndTickets from '../../../../../hooks/Use-EventsWithSession'
import { useAuth } from '../../../../auth/context/AuthContext'
import { OrbitProgress } from 'react-loading-indicators'

function EnrollAttendeeForm() {
  const [formData, setFormData] = useState({
    attendee: null,
    event: null,
    session: null,
    entry: null,
  })
  const { firebaseToken } = useAuth()
  const queryClient = useQueryClient();
  const { data: enrolledAttendees, isLoading: enrollLoading } = useAttendeeData();
  const { data: allEvents } = useEventsWithSessionsAndTickets()
  const { data: totalAttendees ,isLoading:totalAttendeesLoading} = useAttendee()
  const eventOptions = allEvents?.map(event => ({ label: event.name, id: event.id }))
  const attendeeOptions = totalAttendees?.length ? totalAttendees?.map(att => ({ id: att.id, name: att.full_name })) : [{ id: null, name: 'No attendees available', disabled: true }]
  const [filteredSession, setFilteredSessions] = useState([])
  const [filteredTickets, setFilteredTickets] = useState([])


  const mutation = useMutation({
    mutationFn: (data) => {
      setToken(firebaseToken)
      return api.post('/enrollattendee', data)
    },
    onSuccess: async () => {
      await Swal.fire(`Attendee Enrolled Successfully!`)
      setFormData({
        attendee: null,
        event: null,
        session: null,
        entry: null,
      });
      queryClient.invalidateQueries({ queryKey: ['enrolledAttendee'] });
    },
    onError: (err) => {
      console.error(err)
      if (err?.response?.status === 400) Swal.fire('Please enter valid inputs')
      else if (err?.response?.status === 401) Swal.fire('Unauthorized! Please login again')
      else if (err?.response?.status === 500) Swal.fire('Enrollment Failed! Please Try again later')
      else if (err?.response?.status === 409) Swal.fire('Attendee already enrolled!!');
      else Swal.fire('Something went wrong! Please try again later')
    }
  })
  const { mutateAsync: enrollAttendee, isPending } = mutation;


  useEffect(() => {
    if (!formData.event) {
      setFilteredSessions([{ label: 'Select event to choose session', value: '', disabled: true }]);
      setFilteredTickets([{ label: 'Select event to choose entry', value: '', disabled: true }]);
      return;
    }

    const selectedEvent = allEvents?.find(e => e.id === formData.event.id);
    const sessionsForEvent = selectedEvent?.session?.map(s => ({ label: s.name, value: s.id })) || [];
    const ticketsForEvent = selectedEvent?.ticket?.map(t => ({ label: t.name, value: t.id })) || [];

    if (sessionsForEvent.length === 0) {
      setFilteredSessions([{ label: 'No sessions for this event', value: '', disabled: true }]);
    } else {
      setFilteredSessions(sessionsForEvent)
    }

    if (ticketsForEvent.length === 0) {
      setFilteredTickets([{ label: 'No entries for this event', value: '', disabled: true }]);
    } else {
      setFilteredTickets(ticketsForEvent)
    }

    setFormData(prev => ({ ...prev, session: null, entry: null }));
  }, [formData.event, allEvents]);


  const handleSelect = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  const handleSubmit = async () => {
    if (!formData.attendee || !formData.event || !formData.session || !formData.entry) {
      Swal.fire('Please Fill all the fields!')
      return
    }

    const payload = {
      attendee_id: formData.attendee.id,
      event_id: formData.event.id,
      session_id: formData.session.value,
      ticket_or_invitee_id: formData.entry.value,
    };
    try {
      await enrollAttendee(payload)
      await new Promise((res) => setTimeout(res, 500))
    }
    catch (error) {
      if (!error?.response) {
        Swal.fire('Something went wrong, Please try again later!!')
        console.error('Failed to enroll attendee', error);
      }
      else {
        throw error
      }
    }
  }

  return (
    <div className='w-full bg-white px-10 py-10 border-[1.3px] border-b-sidebar-bg space-y-6 relative'>
      {
        isPending && <div className='absolute inset-0 bg-gray-100 opacity-25 z-50 flex items-center justify-center'>
          <OrbitProgress color="#800080" size="medium" />
        </div>
      }

      <div className='flex flex-col lg:flex-row lg:items-end w-full gap-6'>
        <div className='flex flex-col flex-1'>
          <SearchableDropdown
            label='Attendees'
            value={formData.attendee}
            options={attendeeOptions}
            onSelect={(attendee) => handleSelect('attendee', attendee)}
            disabled={!totalAttendees || !totalAttendees?.length}
            isLoading={totalAttendeesLoading}
          />
        </div>
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Events'
            value={formData.event}
            options={eventOptions}
            onSelect={(value) => handleSelect('event', value)}
          />
        </div>
      </div>

      <div className='flex flex-col lg:flex-row lg:items-end w-full gap-6'>
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Session'
            options={filteredSession}
            value={formData.session}
            onSelect={(value) => handleSelect('session', value)}
          />
        </div>

        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Entry'
            options={filteredTickets}
            value={formData.entry}
            onSelect={(value) => handleSelect('entry', value)}
          />
        </div>
      </div>

      <NormalBtn text={isPending ? 'Enrolling...' : 'Enroll'} type='primary' onClick={handleSubmit} disabled={isPending} />
      <EnrollList data={enrolledAttendees} type="attendee" isLoading={enrollLoading} />
    </div>
  )
}

export default EnrollAttendeeForm
