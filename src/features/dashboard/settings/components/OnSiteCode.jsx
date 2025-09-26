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
                      <button className="px-8 py-2 bg-buttonpurple text-white rounded-full w-40 ml-3">Generate</button>
                      <input type="text" placeholder="code" className="w-full lg:-ml-40"/>
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
                        <StaffList/>
                  </div>
        
        
                </div>
    )
}