import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCreateInvitation } from "../../../../../hooks/Use-createInvitation";
import UseEvents from "../../../../../hooks/Use-event-list";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import UseInviteeCategory from "../../../../../hooks/Use-inviteeCategory-list";
import { useNavigate } from "react-router-dom";

export default function CreateInvitations() {

  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] =useState(null);

  const [formData, setFormData] = useState({
    ticket_category_id: "",
    event_id: "",
    start_time: "",
    end_time: "",
    name: ""
  });

  const [errors, setErrors] = useState({});

  const {data: events = []} = UseEvents();
  const {data: inviteeCategory = []} = UseInviteeCategory();

  const mutation = useCreateInvitation();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));

    setErrors((prev) => ({...prev, [name]: ""}));
  };

  const validateForm = () => {
    const newErrors = {};
    if(!formData.name.trim())
      newErrors.name = "Ticket name required";

    if(!formData.ticket_category_id)
      newErrors.ticket_category_id = "Invitation type required";

    if(!formData.event_id)
      newErrors.event_id = "Event name is required";

    if(!formData.start_time)
      newErrors.start_time = "Start time is required";

    if(!formData.end_time)
      newErrors.start_date = "End time is required";
    
    if(!startDate)
      newErrors.startDate = "Start date is required";


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e, mode) => {
    e.preventDefault();

    if(!validateForm()) return;

    const payload = {
      ticket_category_id: formData.ticket_category_id,
      event_id: formData.event_id,
      start_time: `${formData.start_date}T${formData.start_time}:00Z`,
      end_time: `${formData.end_date}T${formData.end_time}:00Z`,
      name: formData.name,
    };

    mutation.mutate(payload, {
      onSuccess: (res) => {
        alert("Invitations created successfully");

        if(mode === "navigate" )
          navigate("/event/allinvitations");
        else if(mode === "stay")
        {
          setFormData({ ticket_category_id: "", event_id: "", start_time: "", end_time: "", name: "" });
          setStartDate(null);
          setEndDate(null);
        }
      },
      onError: (err) => {
        alert("Failed to create Invitation"),
        console.error("Error creating Invitations :: ", err.response?.data || err.message);
      }
    });

      console.log("Payload being sent :   ", payload);

  }
  return (
    <div className='flex min-h-screen bg-bglightpurple'>
      
      <div className='w-full'>
        <div className='pt-15 pr-15 pl-15 flex justify-between text-xl '>
          <h1>Add a new Invitation</h1>
          
        </div>

        <hr className="ml-15 mr-15 mt-5 border-1 border-textgray" />


        <form onSubmit={handleSubmit} className='box-border border-2 border-buttonpurple rounded-lg ml-15 mr-15 mb-15 mt-5 p-10 lg:pr-30 bg-white '>

            <label className="label">Ticket Name</label>
            <input 
              type="text" 
              className="border w-full mb-4"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}


            <label className="label">
                Choose Event
            </label>
            <select 
              name="event_id"
              value={formData.event_id}
              onChange={handleChange}
              className="w-full mb-4">
                <option value="">Select Event</option>
                {
                  events?.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.name}
                    </option>
                  ))
                }
            </select>
            {errors.event_id && <p className="text-red-500 text-sm">{errors.event_id}</p>}


            <label className="label mt-4">
                Choose Invitation Type
            </label>
            <select 
              name="ticket_category_id"
              value={formData.ticket_category_id}
              onChange={handleChange}
              className="w-full"
            >
                <option value="">Select Invitation Type</option>
                {
                  inviteeCategory?.map((inv) => (
                    <option key={inv.id} value={inv.id}>
                      {inv.tag}
                    </option>
                  ))
                }
            </select>
            {errors.ticket_category_id && <p className="text-red-500 text-sm">{errors.ticket_category_id}</p>}



            <div className='mt-4 gap-10'>
              <div className='col-span-2'>
                <label className="label">Validity starts at....*</label>

              <div className='flex flex-col lg:flex-row  space-x-2 relative overflow-visible'>

                <DatePicker 

                  selected={startDate}
                  className='border'
                  name="start_date"  
                  onChange={(date) => {
                    setStartDate(date);
                    setFormData(prev => ({
                      ...prev,
                      start_date: date ? date.toISOString().split('T')[0] : ""
                    }));
                  }}

                  dateFormat={"MMM d, yyyy"}
                  placeholderText="Start Date"
                />

                <span>at</span>

                <DatePicker 
                  selected={formData.start_time ? new Date(`1970-01-01T${formData.start_time}:00`) : null}
                  onChange={(date) => {
                    if(date) {
                      const hours = date.getHours().toString().padStart(2, "0");
                      const minutes = date.getMinutes().toString().padStart(2, "0");
                      setFormData(prev => ({ ...prev, start_time: `${hours}:${minutes}` }));
                    }
                  }}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  placeholderText="Start Time"
                  className="border"
              />

              {(errors.start_date || errors.start_time) && (
                  <p className="text-red-500 text-sm">
                    {errors.start_date || errors.start_time}
                  </p>
                )}

              </div>
              </div>
            
            </div>

            <div className='mt-4  gap-10'>
              <div className='col-span-2'>
                <label className="label">Validity ends at....*</label>

              <div className='flex flex-col lg:flex-row space-x-2'>

                <DatePicker 

                  selected={endDate}
                  className='border'
                  name="start_date"
                  onChange={(date) => {
                    setEndDate(date);
                    setFormData(prev => ({
                      ...prev,
                      end_date: date ? date.toISOString().split('T')[0] : ""
                    }));
                  }}  

                  dateFormat="MMM d, yyyy"
                  placeholderText="End Date"
                />
                <span>at</span>

                <DatePicker
                  selected={formData.end_time ? new Date(`1970-01-01T${formData.end_time}:00`) : null}
                  onChange={(date) => {
                    if(date) {
                      const hours = date.getHours().toString().padStart(2, "0");
                      const minutes = date.getMinutes().toString().padStart(2, "0");
                      setFormData(prev => ({ ...prev, end_time: `${hours}:${minutes}` }));
                    }
                  }}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}           
                  timeCaption="Time"
                  dateFormat="HH:mm"
                  placeholderText="End Time"
                  className="border"
                />

                {(errors.end_date || errors.end_time) && (
                  <p className="text-red-500 text-sm">
                    {errors.end_date || errors.end_time}
                  </p>
                )}

              </div>                
              </div>
            
            </div>

            
            <div className="flex flex-col lg:flex-row gap-4 lg:space-x-5 mt-4 sm:pr-2">
              
                <button 
                  type="submit" 
                  className='bg-buttonpurple px-8 py-1 rounded-2xl text-white'
                  onClick={(e) => handleSubmit(e, "navigate")}
                  >
                    Create Invitation
                  </button>
              

                <button 
                  type="submit" 
                  className='flex items-center gap-2 bg-buttonpurple px-8 py-1 rounded-2xl text-white'
                  onClick={(e) => handleSubmit(e,"stay")}
                > 
                  <FaPlus/> 
                  Create Invitation & Add New 
                </button>

            </div>
            
        </form>
        </div>
    </div>
  )
}
