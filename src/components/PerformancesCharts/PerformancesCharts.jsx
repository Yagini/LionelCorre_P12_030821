import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./PerformancesCharts.css";

import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";

//import { USER_PERFORMANCE } from "../../datas/data";
import { getUserPerformanceData } from "../../services/userService";

function PerformancesCharts({ userId }) {
  //const userPerformance = USER_PERFORMANCE.find((user) => user.userId === userId);
  //const { data } = userPerformance;

  const [performance, setPerformance] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (userId !== undefined) {
      getUserPerformanceData(userId).then((userPerformance) => {
        setIsError(!userPerformance);
        setPerformance(userPerformance);
      });
    }
  }, [userId]);

  return (
    <div className="performances-charts">
      {performance ? (
        <>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart outerRadius="80%" data={performance.data}>
              <PolarGrid radialLines={false} />
              <PolarAngleAxis dataKey="kind" dy={3} stroke="#fff" tickLine={false} tick={{ fontSize: 10 }} />
              <Radar dataKey="value" stroke="transparent" fill="#FF0101" fillOpacity="0.7" />
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
