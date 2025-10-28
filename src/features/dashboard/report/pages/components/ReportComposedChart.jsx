import { ComposedChart, Bar, Line, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer, } from "recharts";

const ReportComposedChart = ({ title, data, barKey = "sent", lineKey = "checkedIn", barName = "Invitation Sent", lineName = "Checked-In" }) => {
  const minChartWidth = Math.max(data.length * 100, 250);
  return (
    <div className="p-4 ">
      <h2 className="text-lg font-bold text-gray-700 mb-4 text-center">{title}</h2>
      <div className="w-full overflow-x-auto">
        <div style={{ minWidth: `${minChartWidth}px`, height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={data}
              margin={{ top: 20, right: 0, left: 0, bottom: 10 }}
            >
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip cursor={false} />
              <Legend
                verticalAlign="bottom"
                align="center"
                wrapperStyle={{
                  paddingTop: 10,
                  marginLeft: 25,
                  fontSize: "16px",
                  color: "#555",
                }}
              />

              {/* 🟦 Bar Chart */}
              <Bar dataKey={barKey} name={barName} fill="#6B46C1" barSize={40}>
                <LabelList dataKey="sent" position="top" fill="#000" fontSize={12} />
              </Bar>

              {/* 🟩 Line Graph */}
              <Line
                type="linear"
                dataKey={lineKey}
                name={lineName}
                stroke="#10b981"
                strokeWidth={3}
                dot={{ r: 5, fill: "#10b981" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ReportComposedChart;
