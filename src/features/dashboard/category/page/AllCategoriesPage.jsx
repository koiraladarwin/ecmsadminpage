import React from 'react'
import CategoryHeader from '../components/CategoryHeader'
import CategoryCard from '../components/CategoryCard'

const eventCategories = ['Meet & Greet', 'Trade Fair', 'Conference', 'Exhibition', 'Wedding Reception', 'Workshop', 'Seminar']
const staffCategories = ['Admin', 'Manager', 'Scanner']
const attendeeCategories = ['INV', 'BOD', 'GST', 'VIP', 'STF', 'MEM']
const ticketCategories = ['General Admission', 'Premium Ticket', 'Platinum Ticket', 'Diamond Ticket']
const InvitationCategories = ['General Invitation', 'VIP Invitation', 'Guest Invitation']

function AllCategoriesPage() {
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