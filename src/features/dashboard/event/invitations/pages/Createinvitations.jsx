import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CreateInvitations() {
  return (
    <div className='flex min-h-screen bg-bglightpurple'>
      
      <div class='w-full'>
        <div className='pt-15 pr-15 pl-15 flex justify-between text-xl '>
          <h1>Add a new Invitation</h1>
          
        </div>

        <hr className="ml-15 mr-15 mt-5 border-1 border-textgray" />


        <form action="" className='box-border border-2 border-buttonpurple rounded-lg ml-15 mr-15 mb-15 mt-5 p-10 pl-20 pr-30 bg-white '>
            <label className="label">
                Choose Event
            </label>
            <select name="" id="" className="w-full mb-4">
                <option value=""></option>
            </select>

            <label className="label mt-4">
                Choose Invitation Type
            </label>
            <select name="" id="" className="w-full">
                <option value=""></option>
            </select>


            <div className='mt-4 grid  gap-10'>
              <div className='col-span-2'>
                <label class="label">Validity starts at....*</label>

              <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border'  
                />
                <span>at</span>
                <input type="text" className='border' />

              </div>                
              </div>
            
            </div>

            <div className='mt-4 grid gap-10'>
              <div className='col-span-2'>
                <label class="label">Validity ends at....*</label>

              <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border'  
                />
                <span>at</span>
                <input type="text" className='border' />

              </div>                
              </div>
            
            </div>

            
            <div className="flex space-x-5 mt-4">
              <Link to="/event/allinvitations" >
                <button className='bg-buttonpurple px-8 py-1 rounded-2xl text-white'>Create Invitation</button>
              </Link>
              <Link to="/event/allinvitations" >
                <button className='flex items-center gap-2 bg-buttonpurple px-8 py-1 rounded-2xl text-white'> <FaPlus/> Create Invitation & Add New </button>
              </Link>
            </div>
            
        </form>
        </div>
    </div>
  )
}
