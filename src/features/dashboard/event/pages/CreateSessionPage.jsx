import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CreateSessionPage() {
  return (
    <div className='flex min-h-screen bg-bglightpurple'>
      
      <div class='w-full'>
        <div className='pt-15 pr-15 pl-15 flex justify-between text-xl '>
          <h1>Create Sessions</h1>
          
        </div>

        <hr className="ml-15 mr-15 mt-5 border-1 border-textgray" />


        <form action="" className='box-border border-2 border-buttonpurple rounded-lg ml-15 mr-15 mb-15 mt-5 p-10 lg:pr-30 bg-white '>
            <label htmlFor="" class="label">
                Add Session Name
            </label>
            <input 
              type="text"
              className='border w-full'
            />


            <div className='mt-2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
              <div className='col-span-2'>
                <label class="label">Session starts at</label>

              <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border w-full'  
                />
                <span>at</span>
                <input type="text" className='border w-full' />

              </div>                
              </div>
            
            <div>
              <label class="label"> Hall Name</label>
              <input type="text" 
                className='border w-full'
              />
            </div>
            
            </div>

            <div className='mt-2 grid grid-cols-1 lg:grid-cols-3 gap-10'>
              <div className='col-span-2'>
                <label class="label">Session Ends at</label>

              <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border w-full'  
                />
                <span>at</span>
                <input type="text" className='border w-full' />

              </div>                
              </div>
            
            <div>
              <label class="label"> Choose Event</label>
              <select className='border w-full' >
                <option value=""></option>
              </select>
            </div>
            
            </div>

            <div className="mt-2">
              <label class="label">Description</label>
              <textarea className='w-full border h-20'></textarea>
            </div>
            
            <div className="flex flex-col gap-4 lg:flex-row space-x-5 mt-2">
              <Link to="/event/allsession" >
                <button className='bg-buttonpurple px-8 py-1 rounded-2xl text-white'>Save</button>
              </Link>
              <Link to="/event/createsession" >
                <button className='flex items-center gap-2 bg-buttonpurple px-8 py-1 rounded-2xl text-white'> <FaPlus/> Save & Add More </button>
              </Link>
            </div>
            
        </form>
        </div>
    </div>
  )
}
