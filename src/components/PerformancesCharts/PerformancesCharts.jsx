import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./PerformancesCharts.css";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

import { getUserPerformanceData } from "../../services/userService";
import { UserPerformance } from "../../models/userPerformance";

/**
 * Component RadarChart
 * @param {number} userId the Id of the user
 */
function PerformancesCharts({ userId }) {
  const [performance, setPerformance] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (userId !== undefined) {
      getUserPerformanceData(userId).then((userPerformance) => {
        setIsError(new UserPerformance(!userPerformance));
        setPerformance(new UserPerformance(userPerformance));
      });
    }
  }, [userId]);

  /**
   * Change the value on the PolarAngleAxis
   * @param {object} kind is the fetched data
   * @returns {string} value as been display
   */
  const changeValueOfRadar = ({ kind }) => {
    let value = "";
    switch (kind) {
      case 1:
        value = "Cardio";
        break;
      case 2:
        value = "Energie";
        break;
      case 3:
        value = "Endurance";
        break;
      case 4:
        value = "Force";
        break;
      case 5:
        value = "Vitesse";
        break;
      case 6:
        value = "Intensité";
        break;
      default:
        value = "";
    }
    return value;
  };

  return (
    <div className="performances-charts">
      {performance ? (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius={window.innerWidth < 1025 ? "50%" : "68%"} data={performance.data}>
              <PolarGrid radialLines={false} />
              <PolarAngleAxis
                dataKey={changeValueOfRadar}
                dy={2}
                stroke="#fff"
                tickLine={false}
                tick={{ fontSize: 10 }}
              />
              <Radar dataKey="value" fill="#FF0101" fillOpacity="0.7" />
            </RadarChart>
          </ResponsiveContainer>
        </>
      ) : isError ? (
        <span>Erreur lors de la récupération des data</span>
      ) : null}
    </div>
  );
}

PerformancesCharts.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default PerformancesCharts;
