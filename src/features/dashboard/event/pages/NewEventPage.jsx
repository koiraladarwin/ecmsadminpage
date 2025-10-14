import { Link } from "react-router-dom";
import { useState } from "react";
import { useCreateEvent } from "../../../../hooks/Use-createEvent";
import useEventCategory from "../../../../hooks/Use-eventCategory-list";

export default function CreateEventPage() {

  const [formData, setFormData] = useState({
    name:"",
    event_organizer: "",
    location: "",
    description: "",
    event_category_id: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
  });

  const [errors, setErrors] = useState({});

  const {data: categories = [], isLoading: categoriesLoading} = useEventCategory();

  const mutation = useCreateEvent();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({...prev, [name]: value}));

    setErrors((prev) => ({...prev, [name]: ""}));
  };

  // for form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) 
      newErrors.name = "Event name is required";

    if (!formData.event_organizer.trim())
      newErrors.event_organizer = "Organizer name is required";

    if (!formData.location.trim()) 
      newErrors.location = "Venue is required";

    if (!formData.startDate) 
      newErrors.startDate = "Start date is required";

    if (!formData.startTime) 
      newErrors.startTime = "Start time is required";

    if (!formData.endDate) 
      newErrors.endDate = "End date is required";

    if (!formData.endTime) 
      newErrors.endTime = "End time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()) return;

    const payload = {
      name: formData.name,
      event_category_id: formData.event_category_id || null,
      description: formData.description,
      start_time: `${formData.startDate}T${formData.startTime}:00Z`,
      end_time: `${formData.endDate}T${formData.endTime}:00Z`,
      location: formData.location,
      event_organizer: formData.event_organizer,
    };

    mutation.mutate(payload, {
      onSuccess: (res) => alert("Event created successfully!"),
      onError: (err)=> {
        alert("Failed to create event"),
        console.error("Error creating events :==", err.response?.data || err.message);
      }
    });

  }
  return (
    <div className='flex min-h-screen bg-bglightpurple'>
      
      <div className='w-full'>
        <div className='pt-15 px-15 flex flex-col lg:flex-row justify-between text-xl font-light'>
          <h1>Create a New Event</h1>          
        </div>

        <hr className="ml-15 mr-15 mt-5 border-1 border-textgray" />


        <form onSubmit={handleSubmit} className='box-border border-2 border-buttonpurple ml-15 mr-15 mb-15 mt-5 p-10 lg:pr-30 bg-white '>
            <label className="label">
                Event Name
            </label>
            <input 
              name="name"
              type="text"
              value={formData.name}
              className='border w-full'
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <div className='mt-2 grid grid-cols-1 lg:grid-cols-2 gap-16'>
              <div>
                <label className="label">
                    Name of Organizer
                </label>
                <input 
                  name="event_organizer"
                  type="text"
                  className='border w-full'
                  value={formData.event_organizer}
                  onChange={handleChange}

                />
                {errors.event_organizer && (
                  <p className="text-red-500 text-sm">{errors.event_organizer}</p>
                )}
              </div>

              <div>
                <label className="label">
                  Event Venue
                </label>
                <input 
                  name="location"
                  type="text" 
                  className='border w-full'
                  value={formData.location}
                  onChange={handleChange}
                 />
                 {errors.venue && <p className="text-red-500 text-sm">{errors.venue}</p>}
              </div>
              
            </div>

            <div className='mt-2 grid grid-cols-2 lg:grid-cols-3 gap-10'>
              <div className='col-span-2'>
                <label className="label">Event starts at</label>

              <div className='flex items-center space-x-2'>
                <input 
                  name="startDate"
                  className={`border w-full ${errors.startDate && "border-red-500"}`}
                  type="date"
                  value={formData.startDate}
                  onChange={handleChange}
                />
                <span>at</span>
                <input 
                  name="startTime"
                  type="time" 
                  className={`border w-full ${errors.startTime && "border-red-500"}`}
                  value={formData.startTime} 
                  onChange={handleChange}
                />

              </div>

              {(errors.startDate || errors.startTime) && (
                <p className="text-red-500 text-sm">
                  {errors.startDate || errors.startTime}
                </p>
              )}

              </div>
            
            <div>
              <label className="label"> Event Category</label>
              <select 
                className='border w-full'
                name="event_category_id"
                value={formData.event_category_id}
                onChange={handleChange}  
              >
                
                <option value="">Select Category</option>
                {
                  categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.tag}
                    </option>
                  ))
                }
              </select>
            </div>
            
            </div>
            
            <div className='mt-5 grid grid-cols-3'>
              <div className='col-span-2'>
                <label className="label">Events ends at</label>
                <div className='flex items-center space-x-2'>
                  <input 
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  className={`border w-full ${errors.endDate && "border-red-500"}`}
                  onChange={handleChange}
                />
                <span>at</span>
                <input 
                name="endTime"
                  type="time"
                  className={`border w-full ${errors.endTime && "border-red-500"}`}
                  value={formData.endTime}
                  onChange={handleChange}
                />
                </div>

                {(errors.endDate || errors.endTime) && (
                  <p className="text-red-500 text-sm">
                    {errors.endDate || errors.endTime}
                  </p>
                )}

              </div>
              
            </div>

            <hr className='mt-5 mb-5 border-1 border-textgray'/>

            <div className='flex flex-col lg:flex-row space-x-2 justify-left'>
              <label className="label">Upload Event Logo</label>
              <input type="file" className='border w-[30%]' placeholder='choose jpg, png or gif' />

              <div>
                <p className='text-sm  mt-1 text-buttonpurple '>Recommend images Size: 72dpi at least 800x1128 pixels in dimensions.</p>
              </div>

            </div>

            <hr className='mt-5 mb-5 border-1 border-textgray' />

            <label className="label">Description</label>
            <textarea 
              name="description"
              className='w-full border h-50'
              value={formData.description}  
              onChange={handleChange}

            />

            <p className='mt-10 mb-10'>
              By continuing you are agreeing to ECMS's 
              <Link><span className="text-buttonred"> Terms & Conditions </span></Link> 
              and 
              <Link><span className="text-buttonred"> Privacy Policy</span></Link>. 
            </p>

            <button type="submit" className='bg-buttonpurple px-8 py-1 rounded-2xl text-white'>Save</button>
        </form>
        </div>
    </div>
  )
}
