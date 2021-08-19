import React from "react";
import PropTypes from "prop-types";

/**
 * Show and display the tooltip
 * @param { Boolean } active change the boolean value if is hoover
 * @param { array } payload the data for fill the BarCharts tooltip
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

export default CustomizedTooltip;
