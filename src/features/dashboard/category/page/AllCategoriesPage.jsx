import React from 'react'
import CategoryHeader from '../components/CategoryHeader'
import CategoryCard from '../components/CategoryCard'
import useEventCategory from '../../../../hooks/Use-eventCategory-list'
import useStaffCategory from '../../../../hooks/Use-StaffCategory-list';
import useAttendeeCategory from '../../../../hooks/Use-attendeeCategory-list';
import useTicketCategory from '../../../../hooks/Use-ticketCategory-list';
import useInvitationCategory from '../../../../hooks/Use-invitationCategory-list';



function AllCategoriesPage() {
  const eventCategories = useEventCategory();
  const staffCategories = useStaffCategory();
  const attendeeCategories = useAttendeeCategory();
  const ticketCategories = useTicketCategory();
  const InvitationCategories = useInvitationCategory();
  return (
    <div className='px-15 pb-10'>
      <CategoryHeader title="Categories-ALL" showForm={false} />
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 mt-8 md:h-70 '>
        <CategoryCard data={eventCategories} categoryTitle="Event Categories" />
        <CategoryCard data={staffCategories} categoryTitle="Staff Categories" />
        <CategoryCard data={attendeeCategories} categoryTitle="Attendee Categories" />
      </div>
      <div className='grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 mt-16  md:h-70'>
        <CategoryCard data={ticketCategories} categoryTitle="Ticket Categories" />
        <CategoryCard data={InvitationCategories} categoryTitle="Invitation Categories" />
      </div>
    </div>
  )
}

export default AllCategoriesPage