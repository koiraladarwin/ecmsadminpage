import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

<<<<<<< HEAD
const ReportPieChart = ({ data, title }) => {
=======
const ReportPieChart = ({ data,title }) => {
>>>>>>> 3ae9e544925e5790fa98817f482ea344a77536c3
  const COLORS = ["#4CAF50", "#F44336"];

  return (
    <div className="text-center">
      <h3 className="text-lg font-bold text-gray-700">{title}</h3>
      <div className="overflow-x-auto md:overflow-x-hidden">
        <div className="w-full flex justify-center">
<<<<<<< HEAD
          <PieChart width={350} height={320}>
=======
          <PieChart width={250} height={320}>
>>>>>>> 3ae9e544925e5790fa98817f482ea344a77536c3
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

export default ReportPieChart;
