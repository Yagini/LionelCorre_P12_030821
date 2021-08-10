import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";
import "./ActivityBarChart.css";

function ActivityBarChart() {
  const USER_ACTIVITY = [
    {
      day: "2020-07-01",
      kilogram: 80,
      calories: 240,
    },
    {
      day: "2020-07-02",
      kilogram: 80,
      calories: 220,
    },
    {
      day: "2020-07-03",
      kilogram: 81,
      calories: 280,
    },
    {
      day: "2020-07-04",
      kilogram: 81,
      calories: 290,
    },
    {
      day: "2020-07-05",
      kilogram: 80,
      calories: 160,
    },
    {
      day: "2020-07-06",
      kilogram: 78,
      calories: 162,
    },
    {
      day: "2020-07-07",
      kilogram: 76,
      calories: 390,
    },
  ];

  return (
    <div className="activity-bar-chart">
      <div className="activity-bar-chart__infos">
        <h2 className="activity-bar-chart__title">Activité quotidienne</h2>
        <div className="activity-bar-chart__legend">
          <div className="activity-bar-chart__weight">
            <span className="activity-bar-chart__dot activity-bar-chart__dot--gray"></span>
            <p>Poids (kg)</p>
          </div>
          <div className="activity-bar-chart__calories">
            <span className="activity-bar-chart__dot activity-bar-chart__dot--red"></span>
            <p>Calories brulées (kcal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          width={770}
          height={270}
          barGap={8}
          barCategoryGap={30}
          data={USER_ACTIVITY}
          margin={{ top: 50, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tickLine={false} tick={{ fontSize: 14 }} dy={15} />
          <YAxis
            yAxisId="kg"
            dataKey="kilogram"
            interval="number"
            allowDecimals={false}
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 14 }}
            domain={["dataMin -1", "dataMax +2"]}
            dx={30}
          />
          <YAxis yAxisId="cal" dataKey="calories" hide={true} domain={[0, "dataMax +50"]} />
          <Tooltip />
          <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
          <Bar yAxisId="cal" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ActivityBarChart;
