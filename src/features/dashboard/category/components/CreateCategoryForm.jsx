import React, { useState } from 'react'
import Swal from 'sweetalert2'
import NormalBtn from '../../people/components/NormalBtn'
import CustomDropdown from '../../people/components/CustomDropDown'
import Button from '../../people/components/Button'
import { useNavigate } from 'react-router-dom'

function CreateCategoryForm() {
  const navigate = useNavigate()
  const categoryOptions = ['Event Category', 'Staff Category', 'Attendees Category', 'Invitation Category', 'Ticket Category']

  const [formData, setFormData] = useState({
    category: '',
    tag: '',
    description: ''
  })

  // dropdown update
  const handleSelect = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }
  // form update
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    const { category, tag, description } = formData
    if (!category || !tag || !description) {
      Swal.fire('Please fill all the fields!')
      return
    }
    console.log('Form Data:', formData)
    Swal.fire('Form submitted successfully!')
    setFormData({ category: '', tag: '', description: '' })
  }

  const handleSave = () => {
    const { category, tag, description } = formData
    if (!category || !tag || !description) {
      Swal.fire('Please fill all the fields!')
      return
    }
    navigate('/event/category/allcategories')
  }

  return (
    <div className='w-full bg-white px-10 py-10 border-[1.3px] border-b-sidebar-bg '>
      {/* choose category */}
      <div className='flex flex-col lg:flex-row lg:items-center w-full gap-8'>
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Choose Category *'
            options={categoryOptions}
            onSelect={(value) => handleSelect('category', value)}
            height={true}
            h={15}
          />
        </div>

        {/* tag */}
        <div className='flex flex-col flex-1'>
          <div>
            <label className='font-bold text-sidebar-bg mb-1 block'>Tag *</label>
            <input
              type="text"
              name="tag"
              value={formData.tag}
              onChange={handleChange}
              className='h-15 w-full focus:outline-none'
              style={{ border: 'solid 1px black' }}
            />
          </div>
        </div>
      </div>

      {/* description */}
      <div className='flex flex-col lg:flex-row lg:items-end w-full gap-6 py-4'>
        <div className='flex flex-col flex-1'>
          <label className='font-bold text-sidebar-bg mb-1 block'>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className='w-full border border-black p-2 resize-none focus:outline-none'
            rows={4}
            placeholder="Enter description..."
            style={{ border: 'solid 1px black' }}
          />
        </div>
      </div>

      {/* buttons */}
      <div className='flex flex-row gap-6'>
        <NormalBtn text='Save' type='primary' onClick={handleSave} />
        <NormalBtn text='Save & Add More +' type='primary' onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default CreateCategoryForm
