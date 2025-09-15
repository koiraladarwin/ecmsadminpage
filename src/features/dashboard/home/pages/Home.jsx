import AttendeeStats from "../components/AttendeeStats";
import GraphBox from "../components/GraphBox";
import HireBox from "../components/HireBox";
import StatBox from "../components/StatBox";
import StatCard from "../components/StatCard";
import WeatherWidget from "../components/WeatherWidget";
import { BsPersonVcard } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";

export default function Home() {
  return (
    <div className="min-h-full py-15 px-26 bg-purple-200 flex flex-col space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <StatCard title="ACTIVE EVENTS" value="42%" subtext="21/50" />
        <StatCard title="ENROLLMENT STATUS" value="30%" subtext="150/500" />
        <StatCard title="TOTAL ATTENDEES" value="80%" subtext="1568" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch flex-1">
        <GraphBox />
        <AttendeeStats />
        <WeatherWidget />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        <HireBox />
        <StatBox title="ENROLLED STAFF" value="4" Icon={MdPersonOutline}/>
        <StatBox title="ACTIVE ISSUES" value="0" Icon={BsPersonVcard}/>
      </div>
    </div>
  );
}

