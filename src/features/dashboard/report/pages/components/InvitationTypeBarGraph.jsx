import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const InvitationTypesBarChart = ({ data }) => {
  const chartWidth = Math.max(data.length * 60, 400);

  return (
    <div className="rounded p-4 mt-7 overflow-x-auto">
      <h3 className="md:text-center font-bold text-lg mb-3 text-gray-700 ">Invitation Type Graph</h3>
      <div style={{ width: chartWidth }}>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data} barSize={40} barCategoryGap="20%">
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

export default InvitationTypesBarChart;
