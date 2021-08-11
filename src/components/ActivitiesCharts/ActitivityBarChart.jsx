import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";
import { USER_ACTIVITY } from "../../datas/data";
import "./ActivityBarChart.css";

function ActivityBarChart({ userId }) {
  const userActivity = USER_ACTIVITY.find((user) => user.userId === userId);
  const { sessions } = userActivity;

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
          data={sessions}
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
