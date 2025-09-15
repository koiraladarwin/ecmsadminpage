import { Link } from "react-router-dom";

export default function NewEventPage() {
  return (
    <div className='flex min-h-screen bg-bglightpurple'>
      
      <div class='w-full'>
        <div className='pt-15 pr-15 pl-15 flex justify-between text-xl font-light'>
          <h1>Create a New Event</h1>

          <div className='space-x-2 pr-2'>
            <label>Ticket</label>
            <input type="radio" name="ticket" value="yes" className="size-4 accent-buttonpurple" />
            <label htmlFor="">Yes</label>
            <input type="radio" name="ticket" value="no" className="size-4 accent-buttonpurple"/>
            <label htmlFor="">No</label>
          </div>
          
        </div>

        <hr className="ml-15 mr-15 mt-5 border-1 border-textgray" />


        <form action="" className='box-border border-2 border-buttonpurple ml-15 mr-15 mb-15 mt-5 p-10 pr-30 bg-white '>
            <label htmlFor="" class="label">
                Event Name
            </label>
            <input 
              type="text"
              className='border w-full'
            />

            <div className='mt-2 grid grid-cols-2 gap-16'>
              <div>
                <label class="label">
                    Name of Organizer
                </label>
                <input 
                  type="text"
                  className='border w-full'              
                />
              </div>

              <div>
                <label class="label">
                  Event Venue
                </label>
                <input type="text" className='border w-full' />
              </div>
              
            </div>

            <div className='mt-2 grid grid-cols-3 gap-10'>
              <div className='col-span-2'>
                <label class="label">Event starts at</label>

              <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border w-full'  
                />
                <span>at</span>
                <input type="text" className='border w-full' />

              </div>                
              </div>
            
            <div>
              <label class="label"> Event Category</label>
              <select className='border w-full' >
                <option value=""></option>
              </select>
            </div>
            
            </div>
            
            <div className='mt-5 grid grid-cols-3'>
              <div className='col-span-2'>
                <label class="label">Events ends at</label>
                <div className='flex items-center space-x-2'>
                  <input 
                  type="text"
                  className='border w-full'
                />
                <span>at</span>
                <input 
                  type="text"
                  className='border w-full'
                   />
                </div>
              </div>
              
            </div>
             
            <hr className='mt-5 mb-5 border-1 border-textgray'/>

            <div className='flex items-center space-x-2'>
            <label class="label">Upload Event Logo</label>
            <input type="file" className='border w-[20%]' placeholder='choose jpg, png or gif' />
            <p className='text-sm  mt-1 text-buttonpurple'>Recommend images Size: 72dpi at least 800x1128 pixels in dimensions.</p>

            </div>

            <hr className='mt-5 mb-5 border-1 border-textgray' />

            <label class="label">Description</label>
            <textarea className='w-full border h-50'></textarea>

            <p className='mt-10 mb-10'>
              By continuing you are agreeing to ECM's 
              <Link><span className="text-buttonred"> Terms & Conditions </span></Link> 
              and 
              <Link><span className="text-buttonred"> Privacy Policy</span></Link>. 
            </p>

            <button className='bg-buttonpurple px-8 py-1 rounded-2xl text-white'>Save</button>
        </form>
        </div>
    </div>
  )
}
