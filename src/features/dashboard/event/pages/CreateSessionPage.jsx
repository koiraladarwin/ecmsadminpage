import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import {useCreateSession} from "../../../../hooks/Use-createSession";
import UseEvents from "../../../../hooks/Use-event-list";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateSessionPage() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [formData, setFormData] = useState({
    event_id: "",
    name: "",
    hall_name: "",
    start_date: "",
    end_date: "",
    start_time: "",
    end_time: "",
    description: "",
    event: "",

  });
  const [errors, setErrors] = useState({});

  const {data: events = [], isLoading: eventLoading} = UseEvents();

  const mutation = useCreateSession();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]:value}));

    setErrors((prev) => ({...prev, [name]: ""}));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) 
      newErrors.name = "Session name is required";

    if (!formData.hall_name.trim()) 
      newErrors.hall_name = "Hall name is required";

    if (!startDate) 
      newErrors.start_date = "Start date is required";

    if (!endDate) 
      newErrors.end_date = "End date is required";

    if (!formData.start_time) 
      newErrors.start_time = "Start time is required";

    if (!formData.end_time) 
      newErrors.end_time = "End time is required";

    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()) return;

    const payload = {
      event_id: formData.event_id,
      name: formData.name,
      hall_name: formData.hall_name,
      start_time: `${formData.start_date}T${formData.start_time}:00Z`,
      end_time: `${formData.end_date}T${formData.end_time}:00Z`,
    };

    mutation.mutate(payload, {
      onSuccess: (res) => alert("Sessions created Successfully!"),
      onerror: (err) => {
        alert("Failed to create Session"),
        console.error("Error creating sessions :: ", err.response?.data || err.message);
      }
    });
  }
  
  return (
    <div className='flex min-h-screen bg-bglightpurple'>
      
      <div className='w-full'>
        <div className='pt-15 pr-15 pl-15 flex justify-between text-xl '>
          <h1>Create Sessions</h1>
          
        </div>

        <hr className="ml-15 mr-15 mt-5 border-1 border-textgray" />


        <form onSubmit={handleSubmit} className='box-border border-2 border-buttonpurple rounded-lg ml-15 mr-15 mb-15 mt-5 p-10 lg:pr-30 bg-white '>
            <label  className="label">
                Add Session Name
            </label>
            <input 
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              className='border w-full'
              
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}


            <div className='mt-2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
              <div className='col-span-2'>
                <label className="label">Session starts at</label>

              <div className='flex items-center space-x-2'>
                <DatePicker 

                  selected={startDate}
                  className='border w-full'
                  name="start_date"

                  onChange={(date) => {
                    setStartDate(date);
                    setFormData(prev => ({
                      ...prev,
                      start_date: date ? date.toISOString().split('T')[0] : ""
                    }));
                  }}  
                  
                  dateFormat="MMM d, yyyy"
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
                className="border w-full"
              />

              </div>
              {(errors.start_date || errors.start_time) && (
                  <p className="text-red-500 text-sm">
                    {errors.start_date || errors.start_time}
                  </p>
                )}
                
              </div>
            
            <div>
              <label className="label"> Hall Name</label>
              <input 
                type="text" 
                className='border w-full'
                name="hall_name"
                value={formData.hall_name}
                onChange={handleChange}
              />
              {errors.hall_name && <p className="text-red-500 text-sm">{errors.hall_name}</p>}
            </div>
            
            </div>

            <div className='mt-2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
              <div className='col-span-2'>
                <label className="label">Session Ends at</label>

              <div className='flex items-center space-x-2'>
                <DatePicker
                  
                  selected={endDate}
                  className='border w-full'
                  name="end_date"

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
                  className="border w-full"
                />

              </div>
              {(errors.end_date || errors.end_time) && (
                  <p className="text-red-500 text-sm">
                    {errors.end_date || errors.end_time}
                  </p>
                )}
                
              </div>
            
            <div>
              <label className="label"> Choose Event</label>
              <select 
                className='border w-full'
                name="event_id"
                value={formData.event_id}
                onChange={handleChange} >
                <option value="">Select an Event</option>
                {
                  events?.map((event) => (
                    <option key={event.id} value={event.id}>
                      {event.name}
                    </option>
                  ))
                }
                
              </select>
            </div>
            
            </div>

            <div className="mt-2">
              <label className="label">Description</label>
              <textarea className='w-full border h-20'></textarea>
            </div>
            
            <div className="flex flex-col gap-4 lg:flex-row space-x-5 mt-2">

                <button className='bg-buttonpurple px-8 py-1 rounded-2xl text-white'>
                  Save
                </button>

              
                <button type="submit" className='flex items-center gap-2 bg-buttonpurple px-8 py-1 rounded-2xl text-white'> 
                  <FaPlus/> 
                  Save & Add More 
                </button>
              
            </div>
            
        </form>
        </div>
    </div>
  )
}
