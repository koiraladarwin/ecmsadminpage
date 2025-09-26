import { useState } from 'react'
import CustomDropdown from '../../../people/components/CustomDropDown'
import NormalBtn from '../../../people/components/NormalBtn'
import SalesTicketDetailList from './financeDetail/SalesTicketDetailList'
import useTicketSalesData from '../../../../../hooks/Use-sales-ticket-list'
import usePaymentStatus from '../../../../../hooks/Use-payment-status'
import usePaymentMethod from '../../../../../hooks/User-payment-method'
import useTicketType from '../../../../../hooks/Use-ticket-type'
import useAttendeeType from '../../../../../hooks/Use-attendee-type'
import Swal from 'sweetalert2'
import { OrbitProgress } from 'react-loading-indicators'

function SalesTicketForm() {
  const ticketTypeOptions = useTicketType()
  const attendeeTypeOptions = useAttendeeType()
  const paymentOptions = usePaymentStatus()
  const paymentMethodOptions = usePaymentMethod()
  const { salesData, loading } = useTicketSalesData()



  const [formData, setFormData] = useState({
    ticketType: '',
    attendee: '',
    paymentStatus: '',
    amount: '',
    paymentMethod: '',
    uploadPaymentProof: '',
  })

  //  dropdowns
  const handleSelect = (key, value) => {
    setFormData({ ...formData, [key]: value })
  }

  //  input
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = () => {
    const { ticketType, attendee, paymentStatus, amount, paymentMethod, uploadPaymentProof } = formData
    if (!ticketType || !attendee || !paymentStatus || !amount || !paymentMethod || !uploadPaymentProof) {
      Swal.fire('Please Fill all the fields!')
      return
    }
    console.log('Form Data:', formData)
    Swal.fire('Form submitted successfully!')
    setFormData({
      ticketType: '',
      attendee: '',
      paymentStatus: '',
      amount: '',
      paymentMethod: '',
      uploadPaymentProof: '',
    })
  }

  return (
    <div className='w-full bg-white px-10 py-10 border-[1.3px] border-b-sidebar-bg space-y-6'>
      {/* Ticket Type & Attendee */}
      <div className='flex flex-col lg:flex-row lg:items-end w-full gap-6'>
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Ticket Type'
            options={ticketTypeOptions}
            value={formData.ticketType}
            onSelect={(value) => handleSelect('ticketType', value)}
          />
        </div>
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Attendee'
            options={attendeeTypeOptions}
            value={formData.attendee}
            onSelect={(value) => handleSelect('attendee', value)}
          />
        </div>
      </div>

      {/* Payment Status & Amount */}
      <div className='flex flex-col lg:flex-row lg:items-end w-full gap-6'>
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Payment Status'
            options={paymentOptions}
            value={formData.paymentStatus}
            onSelect={(value) => handleSelect('paymentStatus', value)}
          />
        </div>
        <div className='flex flex-col flex-1'>
          <label className='font-bold text-sidebar-bg text-md'>Amount</label>
          <input
            type="text"
            name="amount"
            className='focus:outline-none h-10 px-2'
            style={{ border: 'black solid 1px' }}
            placeholder='Rs.4000'
            value={formData.amount}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Payment Method & Upload Proof */}
      <div className='flex flex-col lg:flex-row lg:items-end w-full gap-6'>
        <div className='flex flex-col flex-1'>
          <CustomDropdown
            label='Payment Method'
            options={paymentMethodOptions}
            value={formData.paymentMethod}
            onSelect={(value) => handleSelect('paymentMethod', value)}
          />
        </div>
        <div className='flex flex-col md:flex-row items-center flex-1'>
          <label className='font-bold text-sidebar-bg text-md'>Upload Payment Proof</label>
          <input
            type="text"
            name="uploadPaymentProof"
            className='focus:outline-none h-16 md:h-10 w-35 md:w-45 ml-3 px-2'
            style={{ border: 'black solid 1px' }}
            value={formData.uploadPaymentProof}
            onChange={handleChange}
          />
        </div>
      </div>

      <NormalBtn text='Confirm' type='primary' onClick={handleSubmit} />
      {loading ? (
        <div className="w-full h-64 flex justify-center items-center">
          <OrbitProgress
            variant="split-disc"
            dense
            color="#800080"
            size="small"
          />
        </div>
      ) : (
        <SalesTicketDetailList data={salesData} />
      )}
    </div>
  )
}

export default SalesTicketForm
