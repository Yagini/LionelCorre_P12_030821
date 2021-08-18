import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./ScoringCharts.css";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { getUserMainData } from "../../services/userService";

function ScoringCharts({ userId }) {
  const [score, setScore] = useState([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (userId !== undefined) {
      getUserMainData(userId).then((userScore) => {
        setIsError(!userScore);
        setScore(userScore);
      });
    }
  }, [userId]);

  const data = [{ value: score.todayScore }, { value: 1 - score.todayScore }];

  return (
    <div className="scoring-charts">
      {score ? (
        <>
          <h2 className="scoring-charts__title">Score</h2>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={160} height={160}>
              <Pie data={data} dataKey="value" cx="50%" cy="50%" startAngle={90} innerRadius={70} outerRadius={80}>
                {data.map((value, index) =>
                  index === 0 ? (
                    <Cell key={index} fill="#ff0000" cornerRadius="50%" />
                  ) : (
                    <Cell key={index} fill="#fbfbfb" />
                  )
                )}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="scoring-charts__text">
            <div className="scoring-charts__text--value">{`${score.todayScore * 100}%`}</div>
            de votre <br />
            objectif
          </div>
        </>
      ) : isError ? (
        <span className="scoring__error">Erreur lors de la récupération des data</span>
      ) : null}
    </div>
  );
}

ScoringCharts.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default ScoringCharts;
