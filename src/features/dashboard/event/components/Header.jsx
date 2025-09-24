import { FaPlus } from "react-icons/fa";

export default function EventHeader({activeTab, setActiveTab}) {

  const tabs = ["ALL", "PAST", "ONGOING", "UPCOMING"];

  return (
    <div className="">
      <div className="flex items-center justify-between mt-10 pl-10 pr-20">
        
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}

              className={   
                `border px-5 py-1 transition-colors duration-200 ${
                  activeTab === tab ? "bg-sidebar-bg text-white" : "hover:bg-buttonpurple"
                }`
              }
            >
              {tab}
            </button>
          ))}
        </div>

        
        <div>
          <span>Event Categories</span>
        </div>

        
        <button className="bg-[#772a92] text-white px-4 py-2 rounded-3xl flex items-center gap-2">
          <FaPlus />
          CreateEvent
        </button>
      </div>

      <hr className="ml-8 mr-20 m-10 border-gray-400 border-1" />
    </div>
  );
}
