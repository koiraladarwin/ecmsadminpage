import { Link } from "react-router-dom";
import Bullet from "../components/Bullet";
export default function CreateTicket() {
  return (
    <div className='flex min-h-screen bg-bglightpurple'>
      
      <div class='w-full'>
        <div className='pt-15 pr-15 pl-15 flex justify-between text-xl '>
          <h1>Add a new Ticket</h1>
          
        </div>

        <hr className="ml-15 mr-15 mt-5 border-1 border-textgray" />


        <form action="" className='box-border border-2 border-buttonpurple rounded-lg ml-15 mr-15 mb-15 mt-5 p-10 pl-20 pr-30 bg-white '>
            <label className="label">
                Choose an event
            </label>
            <select name="" id="" className="w-full mb-4">
                <option value=""></option>
            </select>


            <div className='mt-4 grid grid-cols-3 gap-10'>
              <div>
                <label class="label">Create Ticket Type</label>

              <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border'  
                />
                </div> 
                </div> 
                <div>

                
                <label class="label">Ticket Price</label>
                <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border'  
                />
                </div> 
                </div>
                <div>
                    <label class="label">Discount(if any)</label>
                <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border w-full'  
                />
                </div>
             
              </div>
            
            </div>

            <div className='mt-4 grid grid-cols-3  gap-10'>
              <div className='col-span-2'>
                <label class="label">Validity starts at....*</label>
                <div className='flex items-center space-x-2'>
                <input type="text"
                  className='border'  
                />
                <span>at</span>
                <input type="text" className='border' />

              </div>  
              

              <div>
                
            </div>            
              </div>

              <div>

              
                    <label class="label">Availability Qty</label>

                    <input type="text" className="w-full" />
                </div>
            
            </div>

            <div className='mt-4 grid grid-cols-3 gap-10'>
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

              <div>
                <label class="label">Choose Event</label>    
                <select name="" id="" className="w-full">
                    <option value=""></option>
                </select>
            </div>
            
            </div>

            <div className="flex justify-between pt-6">
                <div>
                    <h1 className="font-bold">Visibility</h1>
                    
                      <span className="flex gap-2"><Bullet/>Hide ticket before sale start date</span> 
                      <span className="flex gap-2"><Bullet/>Hide ticket after validity end date</span>
                      <span className="flex gap-2"><Bullet/>Show ticket available quantity</span>
                      <span className="flex gap-2"><Bullet/>Hide ticket when completely sold out</span>
                    
                    
                    
                    
                  </div>
                <div className="mr-12">
                    <button className="border rounded-full bg-sidebar-bg text-white font-bold px-6 py-2">Upload QR</button>
                </div>
            </div>

            
            <div className="flex space-x-5 mt-4">
              <Link to="/events/viewticket" >
                <button className='bg-buttonpurple px-8 py-1 rounded-2xl text-white'>Create Ticket</button>
              </Link>
              
            </div>
            
        </form>
        </div>
    </div>
  )
}
