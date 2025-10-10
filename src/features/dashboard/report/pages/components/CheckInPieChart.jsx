import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const CheckinPieChart = ({ checkedIn = 45, notCheckedIn = 15 }) => {
  const data = [
    { name: "Checked In", value: checkedIn },
    { name: "Not Checked In", value: notCheckedIn },
  ];

  const COLORS = ["#4CAF50", "#F44336"];

  return (
    <div className="mt-6 text-center">
      <h3 className="text-lg font-bold mb-3 text-gray-700">Check-In Status</h3>
      <div className="overflow-x-auto md: md:overflow-x-hidden">
        <div className="min-w-[300px] flex justify-center">
          <PieChart width={320} height={260}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label={({ percent }) =>
                ` ${(percent * 100).toFixed(0)}%`
              }
              labelStyle={{
                fontSize: "14px",
                fill: "#333",
                fontWeight: "500",
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value} People`} />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default CheckinPieChart;
