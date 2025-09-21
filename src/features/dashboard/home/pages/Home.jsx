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
    <div className="h-full w-full py-4 px-10  flex flex-col space-y-6 justify-center pt-360 md:pt-100 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-2">
        <StatCard title="ACTIVE EVENTS" value={21} total={50} subtext="21/50" />
        <StatCard title="ENROLLMENT STATUS" value={150} total={500} subtext="150/500" />
        <StatCard title="TOTAL ATTENDEES" value={1600} total={2000} showTotal={true} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 flex-3">
        <GraphBox />
        <AttendeeStats />
        <WeatherWidget />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center flex-1">
        <HireBox />
        <StatBox title="ENROLLED STAFF" value="4" Icon={MdPersonOutline} />
        <StatBox title="ACTIVE ISSUES" value="0" Icon={BsPersonVcard} />
      </div>
    </div>
  );
}

