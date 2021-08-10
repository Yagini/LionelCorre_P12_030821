import React from "react";
import "./AverageSessionsCharts.css";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function AverageSessionsCharts() {
  const sessionsData = [
    {
      day: 1,
      sessionLength: 30,
    },
    {
      day: 2,
      sessionLength: 23,
    },
    {
      day: 3,
      sessionLength: 45,
    },
    {
      day: 4,
      sessionLength: 50,
    },
    {
      day: 5,
      sessionLength: 0,
    },
    {
      day: 6,
      sessionLength: 0,
    },
    {
      day: 7,
      sessionLength: 60,
    },
  ];
  return (
    <div className="average-sessions-charts">
      <h2 className="average-sessions-charts__title">
        Durée moyenne <br />
        des sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sessionsData} margin={{ top: 5, right: 10, left: 10, bottom: 10 }}>
          <XAxis
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.5)"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12 }}
          />
          <YAxis dataKey="sessionLength" hide={true} domain={["dataMin -10", "dataMax +60"]} />
          <Tooltip />
          <Line
            dataKey="sessionLength"
            type="monotone"
            stroke="#fff"
            dot={false}
            activeDot={{ stroke: "rgba(255, 255, 255, 0.6", strokeWidth: 10 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AverageSessionsCharts;
