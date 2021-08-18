import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./ActivityBarChart.css";

import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";

import { getUserActivityData } from "../../services/userService";

function ActivityBarChart({ userId }) {
  const [activity, setActivity] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (userId !== undefined) {
      getUserActivityData(userId).then((userActivity) => {
        setIsError(!userActivity);
        setActivity(userActivity);
      });
    }
  }, [userId]);

  /**
   * display a day for the barCharts
   * @param {string} day is the fetched data
   * @returns {string} the part of the string between the end of indexes
   */
  const substDate = ({ day }) => {
    return day.substring(9);
  };

  return (
    <div className="activity-bar-chart">
      {activity ? (
        <>
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
              data={activity.sessions}
              margin={{ top: 50, right: 30, left: 40, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={substDate} tickLine={false} tick={{ fontSize: 14 }} dy={15} />
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
              <Tooltip content={CustomizedTooltip} />
              <Bar yAxisId="kg" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50, 50, 0, 0]} />
              <Bar yAxisId="cal" dataKey="calories" fill="#E60000" barSize={7} radius={[50, 50, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </>
      ) : isError ? (
        <span className="">Erreur lors de la récupération des data</span>
      ) : null}
    </div>
  );
}

ActivityBarChart.propTypes = {
  userId: PropTypes.number.isRequired,
};

/**
 * show and display the tooltip
 * @param {Boolean, array} params
 * @returns {null}
 */
const CustomizedTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="activity-bar-chart__tooltip-container">
        <p className="activity-bar-chart__tooltip-content">{`${payload[0].value}kg`}</p>
        <p className="activity-bar-chart__tooltip-content">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }
  return null;
};

CustomizedTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired,
};

export default ActivityBarChart;
