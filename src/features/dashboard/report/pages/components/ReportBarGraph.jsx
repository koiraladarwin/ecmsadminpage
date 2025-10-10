import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ReportBarGraph = ({ data,title }) => {
  const chartWidth = Math.max(data.length * 60, 400);


  return (
    <div className="rounded px-1 overflow-x-auto w-full">
      <h3 className="md:text-center font-bold text-lg mb-3 text-gray-700 ">{title}</h3>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} barSize={40} barCategoryGap="15%">
            <XAxis dataKey="type" />
            <YAxis allowDecimals={false} />
            <Tooltip />
            <Bar dataKey="count" fill="#6B46C1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ReportBarGraph;
