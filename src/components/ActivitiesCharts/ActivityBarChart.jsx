import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./ActivityBarChart.css";

import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Bar, ResponsiveContainer } from "recharts";
import CustomizedTooltip from "../CustomizedTooltipForActivityBarChart/CustomizedTooltipForActivityBarChart";

import { getUserActivityData } from "../../services/userService";
import { UserActivity } from "../../models/userActivity";

/**
 * Component BarChart
 * @param {number} userID the Id of the user
 */

function ActivityBarChart({ userId }) {
  const [activity, setActivity] = useState(null);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (userId !== undefined) {
      getUserActivityData(userId).then((userActivity) => {
        setIsError(new UserActivity(!userActivity));
        setActivity(new UserActivity(userActivity));
      });
    }
  }, [userId]);

  /**
   * Display a day for the barCharts
   * @param {string} day the fetched data
   * @returns {number} the part of the string between the end of indexes parse integer
   */
  const substDate = ({ day }) => {
    return parseInt(day.substring(8), 10);
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

export default ActivityBarChart;
