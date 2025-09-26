import useSettingsEvent from "../../../../hooks/Use-SettingsEventList";
import useSettingsStaff from "../../../../hooks/Use-SettingsStaff-List";
import OnSiteCode from "../components/OnSiteCode";
import ScannerAccess from "../components/ScannerAccess";
import { useState } from "react";
export default function SettingsPage1()
{
  const settingsEvent = useSettingsEvent();

  const [activeTab, setActiveTab] = useState("onsite");
  return(
    <div className="pt-4 ">
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