import { ComposedChart, Bar, Line, XAxis, Tooltip, LabelList, ResponsiveContainer, } from "recharts";

const data = [
  { month: "JAN", revenue: 200, events: 15 },
  { month: "FEB", revenue: 250, events: 30 },
  { month: "MAR", revenue: 75, events: 30 },
  { month: "APR", revenue: 106, events: 150 },
  { month: "MAY", revenue: 30, events: 60 },
];

const ComboChart = () => {
  return (
    <div className="w-[400px] h-[400px] flex flex-col">
      {/* custom legend */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center md:pt-0 pt-2">
        <div className="flex flex-col gap-2  md:pl-3 pb-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-0.5 bg-purple-800" />
            <span className="text-sm md:font-bold text-sidebar-bg">Events Statics</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3.5 h-3.5 bg-yellow-400" />
            <span className="text-sm md:font-bold text-sidebar-bg">Revenue</span>
          </div>
        </div>

        {/*  year*/}
        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <div className="flex flex-col">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-purple-600" />
              <span className="text-sm text-sidebar-bg font-bold">Monthly</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-purple-600" />
              <span className="text-sm  text-sidebar-bg font-bold ">Semi Annual</span>
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-purple-600" />
              <span className="text-sm font-bold  text-sidebar-bg">Quartely</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-purple-600" />
              <span className="text-sm text-sidebar-bg font-bold">Annual</span>
            </label>
          </div>
        </div>
      </div>

      {/* chart */}
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 50, right: 30, left: 20, bottom: 20 }}
        >
          <XAxis
            dataKey="month"
            angle={-90}
            axisLine={false}
            dy={15}
            tickLine={false}
          />
          <Tooltip />

          {/* bar graph */}
          <Bar dataKey="revenue" barSize={15} fill="#FFD700" tickLine={false}>
            <LabelList dataKey="revenue" position="top" />
          </Bar>

          {/* line graph */}
          <Line
            type="linear"
            dataKey="events"
            stroke="#6a0dad"
            strokeWidth={4}
            dot={{ r: 6 }}
          >
            <LabelList
              dataKey="events"
              position="top"
              content={({ x, y, value }) => (
                <g>
                  {/* Rectangle box */}
                  <rect
                    x={x - 25}
                    y={y - 50}
                    width={50}
                    height={24}
                    fill="#6a0dad"
                  />

                  {/* Triangle at bottom */}
                  <polygon
                    points={`${x - 6},${y - 26} ${x + 6},${y - 26} ${x},${y - 18}`}
                    fill="#6a0dad"
                  />

                  {/* Centered text */}
                  <text
                    x={x}
                    y={y - 38}
                    fill="#fff"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={12}
                    fontWeight="bold"
                  >
                    {value}
                  </text>
                </g>
              )}
            />
          </Line>
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ComboChart;
