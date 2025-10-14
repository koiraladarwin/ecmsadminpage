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
import { useForm } from "react-hook-form";

export default function TicketForm() {
  const navigate = useNavigate();
  const { firebaseToken } = useAuth();
  const { data: ticketCategory, isLoading: ticketCategoryLoading } = useTicketCategory()
  const { data: allEvents, isLoading: allEventsLoading } = useAllEvents()
  const eventOptions = allEvents?.map(event => ({ label: event.name, value: event.id }))
  const ticketOptions = ticketCategory?.map(ticket => ({ label: ticket.tag, value: ticket.id }))
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm()


  const mutation = useMutation({
    mutationFn: (data) => {
      setToken(firebaseToken)
      return api.post('/ticket', data)
    },
    onSuccess: async (res) => {
      Swal.fire(`${formData.ticketType.label} ticket created successfully!`)
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
    name: "",
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

  const onSubmit = async (e) => {
    if (!formData.validityStartDate || !formData.validityEndDate || !formData.validityStartTime || !formData.validityEndTime || !formData.event || !formData.ticketType || !formData.price.trim() || !formData.name.trim()) {
      Swal.fire('Please fill the required Fields!!!')
      return
    }

    const startTime = new Date(`${formData.validityStartDate}T${formData.validityStartTime}`).toISOString();
    const endTime = new Date(`${formData.validityEndDate}T${formData.validityEndTime}`).toISOString();

    const payload = {
      ticket_category_id: formData.ticketType.value,
      event_id: formData.event.value,
      price: parseFloat(formData.price),
      name: formData.name,
      start_time: startTime,
      end_time: endTime
    };
    console.log('payload', payload)
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
      name: "",
    })
    navigate("/events/viewticket");
  };


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-2 border-buttonpurple rounded-lg mx-2 sm:mx-4 lg:mx-15 my-5 p-4 sm:p-6 lg:p-10 bg-white shadow-lg space-y-6 "
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col">
          <CustomDropdown
            label="Choose an Event"
            options={eventOptions}
            value={formData.event}
            onSelect={(value) => handleSelect("event", value)}
            className="w-full"
            isLoading={allEventsLoading}
          />
        </div>
        <div className="flex flex-col ">
          <CustomDropdown
            label="Create Ticket Type"
            options={ticketOptions}
            value={formData.ticketType}
            onSelect={(value) => handleSelect("ticketType", value)}
            className="w-full"
            isLoading={ticketCategoryLoading}
          />
        </div>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col">
          <label className="font-semibold mb-2">Ticket Name</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: "Ticket name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Ticket name can only contain letters"
              }
            })}
            value={formData.name}
            onChange={handleChange}
            className="border w-full px-3 py-2 h-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ border: 'solid 1px black' }}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2">Ticket Price</label>
          <input
            type="text"
            {...register("price", {
              required: "Price is required",
              validate: (value) =>
                !isNaN(parseFloat(value)) && parseFloat(value) > 0 ? true : "Price must be a positive number"
            })}
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="border w-full px-3 py-2 h-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ border: 'solid 1px black' }}
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

        <div className="flex flex-col">
          <label className="font-semibold mb-2">Discount (if any)</label>
          <input
            type="text"
            {...register("discount", {
              validate: (value) => {
                if (value === "") return true;
                const discountValue = parseFloat(value);
                const priceValue = parseFloat(watch("price"));

                if (isNaN(discountValue) || discountValue < 0) {
                  return "Discount must be a positive number";
                }
                if (!isNaN(priceValue) && discountValue > priceValue) {
                  return "Discount cannot be greater than the Price";
                }
                return true;
              }
            })}
            name="discount"
            value={formData.discount}
            onChange={handleChange}
            className="border w-full px-3 py-2 h-10  focus:outline-none focus:ring-2 focus:ring-purple-500"
            style={{ border: 'solid 1px black' }}
          />
          {errors.discount && <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>}
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
              className="border flex-1 px-3 py-2 h-10  focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ border: 'solid 1px black' }}
            />
            <span className="self-center text-center">at</span>
            <input
              type="time"
              name="validityStartTime"
              value={formData.validityStartTime}
              onChange={handleChange}
              className="border flex-1 px-3 py-2 h-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
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
              className="border flex-1 px-3 py-2 h-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
              style={{ border: 'solid 1px black' }}
            />
            <span className="self-center text-center">at</span>
            <input
              type="time"
              name="validityEndTime"
              value={formData.validityEndTime}
              onChange={handleChange}
              className="border flex-1 px-3 py-2 h-10  focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Ticket"}
        </button>
      </div>
    </form>
  );
}
