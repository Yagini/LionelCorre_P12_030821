import React from "react";
import PropTypes from "prop-types";

import "./AverageSessionsCharts.css";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { USER_AVERAGE_SESSIONS } from "../../datas/data";

function AverageSessionsCharts({ userId }) {
  const userAverageSessions = USER_AVERAGE_SESSIONS.find((user) => user.userId === userId);
  const { sessions } = userAverageSessions;

  return (
    <div className="average-sessions-charts">
      <h2 className="average-sessions-charts__title">
        Durée moyenne <br />
        des sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={sessions} margin={{ top: 5, right: 10, left: 10, bottom: 10 }}>
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

AverageSessionsCharts.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default AverageSessionsCharts;
