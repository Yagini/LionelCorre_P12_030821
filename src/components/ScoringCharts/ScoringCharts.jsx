import React from "react";
import PropTypes from "prop-types";

import "./ScoringCharts.css";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { USER_MAIN_DATA } from "../../datas/data";

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
              index === 0 ? <Cell key={index} fill="#ff0000" cornerRadius="50%" /> : <Cell key={index} fill="#fbfbfb" />
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="scoring-charts__text">
        <div className="scoring-charts__text--value">{`${todayScore * 100}%`}</div>
        de votre <br />
        objectif
      </div>
    </div>
  );
}

ScoringCharts.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default ScoringCharts;
