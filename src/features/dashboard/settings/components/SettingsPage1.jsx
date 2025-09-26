import EventCard from "../components/EventCard";
import useSettingsEvent from "../../../../hooks/Use-SettingsEventList";
import StaffList from "../components/StaffList";
import useSettingsStaff from "../../../../hooks/Use-SettingsStaff-List";
import OnSiteCode from "../components/OnSiteCode";
import ScannerAccess from "../components/ScannerAccess";
import { useState } from "react";
export default function SettingsPage1()
{
  const settingsEvent = useSettingsEvent();
  const settingsStaff = useSettingsStaff();
  const [activeTab, setActiveTab] = useState("onsite");
  return(
    <div className="pt-4">
      <br />

      <div className="w-fit bg-white flex items-center mx-15 rounded-tl-xl rounded-tr-xl border-l border-t border-r border-gray-800 border-solid">
        <button className={`px-5 py-2 font-semibold rounded-tl-xl rounded-tr-xl ${
            activeTab === "onsite"
              ? "bg-sidebar-hover text-white"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("onsite")}>
            Onsite Code
          </button>


        <button className={`px-6 py-2 font-semibold rounded-tl-xl rounded-tr-xl ${
            activeTab === "scanner"
              ? "bg-sidebar-hover text-white"
              : "text-gray-700"
          }`}
          onClick={() => setActiveTab("scanner")}>
            Scanner Access
          </button>       
      </div>
      <hr className="mx-15 border mt-0 pt-0 border-textgray " />

      <div className="border-3 border-textgray mx-15 mt-10 rounded-xl px-10 py-5 bg-white">
        {/* <div>
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


        </div> */}

        {activeTab === "onsite" && (
          <OnSiteCode settingsEvent={settingsEvent}/>
        )}

        {activeTab === "scanner" && (
          <ScannerAccess/>
        )}
      </div>
    </div>
  )
}