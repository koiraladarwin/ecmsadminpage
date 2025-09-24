import React from 'react'
import CategoryHeader from '../components/CategoryHeader'
import CreateCategoryForm from '../components/CreateCategoryForm'

function CreateCategoryPage() {
  return (
    <div className='px-15'>
    <CategoryHeader title="Create New Event Category" showBtn={false} showForm={false}/>
    <CreateCategoryForm/>
    </div>
  )
}

export default CreateCategoryPage