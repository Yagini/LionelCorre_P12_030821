import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { USER_MAIN_DATA } from "../../datas/data";
import "./ScoringCharts.css";

function ScoringCharts({ userId }) {
  const userTodayScore = USER_MAIN_DATA.find((user) => user.id === userId);
  const { todayScore } = userTodayScore;

  const data = [{ value: todayScore }, { value: 1 - todayScore }];

  return (
    <div className="scoring-charts">
      <h2 className="scoring-charts__title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={160} height={160}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" startAngle={90} innerRadius={70} outerRadius={80}>
            {data.map((value, index) =>
              index === 0 ? <Cell key={index} fill="#ff0000" /> : <Cell key={index} fill="#fbfbfb" />
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p>{`${todayScore * 100}%`}</p>
      <br />
      de votre
      <br />
      objectif
    </div>
  );
}

export default ScoringCharts;
