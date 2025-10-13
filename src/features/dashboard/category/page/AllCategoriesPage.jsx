import CategoryHeader from '../components/CategoryHeader'
import CategoryCard from '../components/CategoryCard'
import useEventCategory from '../../../../hooks/Use-eventCategory-list'
import useStaffCategory from '../../../../hooks/Use-StaffCategory-list';
import useAttendeeCategory from '../../../../hooks/Use-attendeeCategory-list';
import useTicketCategory from '../../../../hooks/Use-ticketCategory-list';
import useInvitationCategory from '../../../../hooks/Use-invitationCategory-list';


function AllCategoriesPage() {
  const { data: eventCategories, isLoading: eventLoading } = useEventCategory();
  const { data: staffCategories, isLoading: staffLoading } = useStaffCategory();
  const { data: attendeeCategories, isLoading: attendeeLoading } = useAttendeeCategory();
  const { data: ticketCategories, isLoading: ticketLoading } = useTicketCategory();
  const { data: inviteeCategories, isLoading: inviteeLoading } = useInvitationCategory();

  return (
    <div className='px-15 pt-0 pb-16 min-h-screen'>
      <CategoryHeader title="Categories-ALL" showForm={false} />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-x-4 md:gap-y-8 mt-8 max-h-[200px] '>
        <CategoryCard data={eventCategories} categoryTitle="Event Categories" isLoading={eventLoading} />
        <CategoryCard data={staffCategories} categoryTitle="Staff Categories" isLoading={staffLoading} />
        <CategoryCard data={attendeeCategories} categoryTitle="Attendee Categories" isLoading={attendeeLoading} />
        <CategoryCard data={ticketCategories} categoryTitle="Ticket Categories" isLoading={ticketLoading} />
        <CategoryCard data={inviteeCategories} categoryTitle="Invitation Categories" isLoading={inviteeLoading} />
      </div>

    </div>
  )
}

export default AllCategoriesPage