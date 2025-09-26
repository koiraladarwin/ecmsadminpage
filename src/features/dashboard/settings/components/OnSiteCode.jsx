import EventCard from "./EventCard"
import useSettingsEvent from "../../../../hooks/Use-SettingsEventList";
import StaffList from "./StaffList";
import useSettingsStaff from "../../../../hooks/Use-SettingsStaff-List"
export default function OnSiteCode()
{
    const settingsEvent = useSettingsEvent();
    const settingsStaff = useSettingsStaff();
    return(
        <div>
                  <h1 className="font-bold">Generate Onsite Code</h1>
                  <h2 className="mt-6 font-bold">Event</h2>
        
                  <form action="">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                      <select name="" id="" className="w-full">
                        <option value=""></option>
                      </select>
                      <button className="px-8 py-2 bg-buttonpurple text-white rounded-full ">Generate</button>
                      <input type="text" placeholder="code" className="w-full"/>
                    </div>
                  </form>
        
                  <div className="mt-10">
                    
                    <div className="space-y-2">
                      {settingsEvent.map((event, index) => (
                        <EventCard 
                        key={index} {...event}
                        />
                        ))}
                        
                        </div>
                  </div>
        
                  <div>
        
                    <table>
                      <thead>
                        <tr>
                          <th className="p-3">ID</th>
                          <th className="pl-50">Staff</th>           
                        </tr>
                        
                      </thead>
                    </table>
                    <hr className="mx-2 border-2 mt-0 pt-0 border-textgray " />
        
                    <div>
                      {settingsStaff.map((staff, index) => (
                        <StaffList
                        key={index} {...staff}
                        />
                        ))}
                        
                        </div>
                  </div>
        
        
                </div>
    )
}