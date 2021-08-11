import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import { USER_PERFORMANCE } from "../../datas/data";
import "./PerformancesCharts.css";

function PerformancesCharts({ userId }) {
  const userPerformance = USER_PERFORMANCE.find((user) => user.userId === userId);
  const { data } = userPerformance;  

  return (
    <div className="performances-charts">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" dy={3} stroke="#fff" tickLine={false} tick={{ fontSize: 10 }} />
          <Radar dataKey="value" stroke="transparent" fill="#FF0101" fillOpacity="0.7" />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PerformancesCharts;
