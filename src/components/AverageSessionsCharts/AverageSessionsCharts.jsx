import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./AverageSessionsCharts.css";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CustomizedTooltip from "../CustomizedTooltipForAverageSessions/CustomizedTooltipForAverageSessions"

import { getUserAverageSessionsData } from "../../services/userService";
import { UserAverageSessions } from "../../models/userAverageSessions.js";

/**
 * Component LineChart
 * @param {number} userId the Id of the user
 */
function AverageSessionsCharts({ userId }) {
  const [averageSessions, setAverageSessions] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (userId !== undefined) {
      getUserAverageSessionsData(userId).then((userAverageSessions) => {
        setIsError(new UserAverageSessions(!userAverageSessions));
        setAverageSessions(new UserAverageSessions(userAverageSessions));
      });
    }
  }, [userId]);

  /**
   * Change the value on the xAxis
   * @param {object} day is the fetched data
   * @returns {string} value as been display
   */
  const changeValueOfXAxis = ({ day }) => {
    let value = "";
    switch (day) {
      case 1:
        value = "L";
        break;
      case 2:
        value = "M";
        break;
      case 3:
        value = "M";
        break;
      case 4:
        value = "J";
        break;
      case 5:
        value = "V";
        break;
      case 6:
        value = "S";
        break;
      case 7:
        value = "D";
        break;
      default:
        value = "";
    }
    return value;
  };

  return (
    <div className="average-sessions-charts">
      {averageSessions ? (
        <>
          <h2 className="average-sessions-charts__title">
            Durée moyenne des
            <br />
            sessions
          </h2>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={averageSessions.sessions} margin={{ top: 5, right: 10, left: 10, bottom: 10 }}>
              <XAxis
                dataKey={changeValueOfXAxis}
                stroke="rgba(255, 255, 255, 0.5)"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={CustomizedTooltip} />
              <YAxis dataKey={averageSessions.sessionLength} hide={true} domain={["dataMin -10", "dataMax +60"]} />
              <Line
                dataKey="sessionLength"
                type="monotone"
                stroke="#fff"
                dot={false}
                activeDot={{ stroke: "rgba(255, 255, 255, 0.3", strokeWidth: 10 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      ) : isError ? (
        <span>Erreur lors de la récupération des data</span>
      ) : null}
    </div>
  );
}

AverageSessionsCharts.propTypes = {
  userId: PropTypes.number.isRequired,
};



export default AverageSessionsCharts;
