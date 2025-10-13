import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bullet from "../components/Bullet";
import CustomDropdown from "../../../people/components/CustomDropDown";
import Swal from "sweetalert2";
import { useAuth } from "../../../../auth/context/AuthContext";
import { useMutation } from "@tanstack/react-query";
import useTicketCategory from "../../../../../hooks/Use-ticketCategory-list";
import useAllEvents from "../../../../../hooks/Use-events";
import { api, setToken } from "../../../../../axios/Axios";

export default function TicketForm() {
  const navigate = useNavigate();
  const { firebaseToken } = useAuth();
  const { data: ticketCategory } = useTicketCategory()
  const { data: allEvents } = useAllEvents()
  const eventOptions = allEvents?.map(event => ({ label: event.name, value: event.id }))


  const mutation = useMutation({
    mutationFn: (data) => {
      setToken(firebaseToken)
      return api.post('/ticket', data)
    },
    onSuccess: async (res) => {
      Swal.fire(`${formData.ticketType} created successfully!`)
    },
    onError: (err) => {
      console.error(err)
      if (err?.response?.status === 400) Swal.fire('Please enter valid inputs')
      else if (err?.response?.status === 401) Swal.fire('Unauthorized! Please login again')
      else if (err?.response?.status === 500) Swal.fire('Server error! Try again later')
      else Swal.fire('Something went wrong! Please try again later')
    }
  })

  const { mutateAsync: createTicket, isLoading } = mutation;


  const [formData, setFormData] = useState({
    event: "",
    ticketType: "",
    price: "",
    discount: "",
    validityStartDate: "",
    validityStartTime: "",
    validityEndDate: "",
    validityEndTime: "",
  });

  const handleSelect = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.validityStartDate || !formData.validityEndDate || !formData.validityStartTime || !formData.validityEndTime) {
      Swal.fire('Fill the Compulsory Fields!!!')
      return
    }

    const priceValue = parseFloat(formData.price);
    if (isNaN(priceValue) || priceValue < 0) {
      Swal.fire("Price must be a positive number!");
      return;
    }

    const selectedCategory = ticketCategory?.find(c => c.tag.toLowerCase() === formData.ticketType.toLowerCase());
    if (!selectedCategory) {
      Swal.fire("No ticket category available!");
      return;
    }

    const startTime = new Date(`${formData.validityStartDate}T${formData.validityStartTime}`).toISOString();
    const endTime = new Date(`${formData.validityEndDate}T${formData.validityEndTime}`).toISOString();

    const payload = {
      ticket_category_id: selectedCategory.id,
      event_id: formData.event.value,
      price: priceValue,
      name: formData.ticketType,
      start_time: startTime,
      end_time: endTime
    };
    await createTicket(payload)
    setFormData({
      event: "",
      ticketType: "",
      price: "",
      discount: "",
      validityStartDate: "",
      validityStartTime: "",
      validityEndDate: "",
      validityEndTime: "",
    })
    navigate("/events/viewticket");
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-buttonpurple rounded-lg mx-2 sm:mx-4 lg:mx-15 my-5 p-4 sm:p-6 lg:p-10 bg-white shadow-lg space-y-6"
    >
      <div className="flex flex-col">
        <CustomDropdown
          label="Choose an Event"
          options={eventOptions}
          value={formData.event}
          onSelect={(value) => handleSelect("event", value)}
          className="w-full"
          isLoading={isLoading}
        />
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Create Ticket Type</label>
          <input
            type="text"
            name="ticketType"
            value={formData.ticketType}
            onChange={handleChange}
            className="border w-full px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ border: 'solid 1px black' }}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2">Ticket Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border w-full px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ border: 'solid 1px black' }}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2">Discount (if any)</label>
          <input
            type="text"
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="border w-full px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ border: 'solid 1px black' }}
          />
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 flex flex-col">
          <label className="font-semibold mb-2">Validity starts at *</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="date"
              name="validityStartDate"
              value={formData.validityStartDate}
              onChange={handleChange}
              className="border flex-1 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ border: 'solid 1px black' }}
            />
            <span className="self-center text-center">at</span>
            <input
              type="time"
              name="validityStartTime"
              value={formData.validityStartTime}
              onChange={handleChange}
              className="border flex-1 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ border: 'solid 1px black' }}
            />
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-1 lg:col-span-2 flex flex-col">
          <label className="font-semibold mb-2">Validity ends at *</label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="date"
              name="validityEndDate"
              value={formData.validityEndDate}
              onChange={handleChange}
              className="border flex-1 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ border: 'solid 1px black' }}
            />
            <span className="self-center text-center">at</span>
            <input
              type="time"
              name="validityEndTime"
              value={formData.validityEndTime}
              onChange={handleChange}
              className="border flex-1 px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ border: 'solid 1px black' }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 justify-between pt-6">
        <div className="space-y-1">
          <h1 className="font-bold text-lg">Visibility</h1>
          <span className="flex gap-2 items-center">
            <Bullet /> Hide ticket before sale start date
          </span>
          <span className="flex gap-2 items-center">
            <Bullet /> Hide ticket after validity end date
          </span>
          <span className="flex gap-2 items-center">
            <Bullet /> Show ticket available quantity
          </span>
          <span className="flex gap-2 items-center">
            <Bullet /> Hide ticket when completely sold out
          </span>
        </div>
      </div>


      <div className="flex justify-start  mt-6">
        <button
          className="bg-buttonpurple px-6 sm:px-8 py-2 rounded-2xl text-white font-bold hover:bg-purple-700 transition"
          onClick={handleSubmit}
        >
          Create Ticket
        </button>
      </div>
    </form>
  );
}
