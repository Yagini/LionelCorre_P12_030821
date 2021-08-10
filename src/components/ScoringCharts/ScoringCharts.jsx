import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import "./ScoringCharts.css";

function ScoringCharts() {
  const data = {
    "todayScore": 12,
  };
  return (
    <div className="scoring-charts">
      <h2 className="scoring-charts__title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie data={data} dataKey="todayScore" nameKey="todayScore" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="#FF0000" />         
        </PieChart>
      </ResponsiveContainer>
      <p>12%</p>
      <br />
      de votre
      <br />
      objectif
    </div>
  );
}

export default ScoringCharts;
