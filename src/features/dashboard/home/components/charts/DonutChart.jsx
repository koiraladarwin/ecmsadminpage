import React from "react";
import { PieChart, Pie, Cell, Label, ResponsiveContainer } from "recharts";

function DonutChart({ value, total }) {
  const percentage = total && ((value / total) * 100);

  const data = [
    { name: "Value", value: value },
    { name: "Remaining", value: total - value },
  ];

  return (
    <div style={{ width: 150, height: 150 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="60%"
            outerRadius="80%"
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            <Cell fill="#6a0dad" />
            <Cell fill="#e0e0e0" />
            <Label
              value={`${percentage}%`}
              position="center"
              style={{ fontSize: 24, fontWeight: "bold", fill: "black" }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DonutChart;
