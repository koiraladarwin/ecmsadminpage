import { FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function EventHeader() {
  const tabs = [
    { name: "ALL", path: "/events/myallevent" },
    { name: "PAST", path: "/events/pastevent" },
    { name: "ON GOING", path: "/events/ongoingevent" },
    { name: "UPCOMING", path: "/events/upcomingevent" },
  ];

  return (
    <div className="">
      <div className="flex items-center justify-between mt-10 pl-20 pr-20">
        
        <div className="flex">
          {tabs.map((tab) => (
            <NavLink
              key={tab.name}
              to={tab.path}
              end
              className={({ isActive }) =>
                `border px-5 py-1 transition-colors duration-200 ${
                  isActive ? "bg-sidebar-bg text-white" : "hover:bg-buttonpurple"
                }`
              }
            >
              {tab.name}
            </NavLink>
          ))}
        </div>
        <NavLink to="/event/createvent" >
        <button className="bg-[#772a92] text-white px-4 py-2 rounded-3xl flex items-center gap-2">
          <FaPlus />
          CreateEvent
        </button>
        </NavLink>
      </div>

      <hr className="ml-20 mr-20 m-10 border-gray-400 border-2" />
    </div>
  );
}
