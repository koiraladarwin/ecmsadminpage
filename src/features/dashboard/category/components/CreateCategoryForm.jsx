import { useState } from 'react'
import Swal from 'sweetalert2'
import NormalBtn from '../../people/components/NormalBtn'
import CustomDropdown from '../../people/components/CustomDropDown'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { api, setToken } from '../../../../axios/Axios'
import { useAuth } from '../../../auth/context/AuthContext'
import { OrbitProgress } from 'react-loading-indicators'

function CreateCategoryForm() {
  const navigate = useNavigate()
  const categoryOptions = ['Event Category', 'Staff Category', 'Attendees Category', 'Invitation Category', 'Ticket Category']
  const { firebaseToken } = useAuth()

  const mutation = useMutation({
    mutationFn: (data) => {
      const { category, tag, description } = data
      setToken(firebaseToken)

      switch (category) {
        case 'Event Category':
          return api.post('/eventcategory', { tag, description })
        case 'Staff Category':
          return api.post('/staffcategory', { tag, description })
        case 'Attendees Category':
          return api.post('/attendeecategory', { tag, description })
        case 'Invitation Category':
          return api.post('/inviteecategory', { tag, description })
        case 'Ticket Category':
          return api.post('/ticketcategory', { tag, description })
        default:
          return Promise.reject(new Error('NO such category'))
      }
    },
    onSuccess: async (res) => {
      Swal.fire(`${formData.category} created successfully!`)
      setFormData({ category: '', tag: '', description: '' })
      navigate('/event/category/allcategories')
    },
    onError: (err) => {
      console.error(err)
      if (err?.response?.status === 400) Swal.fire('Please enter valid inputs')
      else if (err?.response?.status === 401) Swal.fire('Unauthorized! Please login again')
      else if (err?.response?.status === 500) Swal.fire('Server error! Try again later')
      else Swal.fire('Something went wrong! Please try again later')
    }
  })

  const { mutateAsync: addCategory, isLoading } = mutation;


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
    const { category, tag } = formData
    if (!category || !tag.trim()) {
      Swal.fire('Please fill all the fields!')
      return
    }
    console.log('Form Data:', formData)
    Swal.fire('Form submitted successfully!')
    setFormData({ category: '', tag: '', description: '' })
  }

  const handleSave = async () => {
    const { category, tag } = formData
    if (!category || !tag.trim()) {
      Swal.fire('Please fill all the fields!')
      return
    }
    await addCategory(formData)
  }

  return (
    <div className='w-full bg-white px-10 py-10 border-[1.3px] border-b-sidebar-bg relative'>
      {
        isLoading && <div className="absolute inset-0 bg-gray-100 opacity-25 flex justify-center items-center z-10">
          <OrbitProgress
            variant="split-disc"
            dense
            color="#800080"
            size="small"
          />
        </div>
      }
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
          <label className='font-bold text-sidebar-bg mb-1 block'>Description</label>
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
