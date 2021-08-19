import React from "react";
import PropTypes from "prop-types";

/**
 * Show and display the tooltip
 * @param {Boolean} active change the boolean value if is hoover
 * @param {array} payload  the data for fill the LineChart tooltip
 * @returns {null}
 */
const CustomizedTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <>
        <p className="average-sessions-charts__tooltip-content">{`${payload[0].value} min`}</p>
      </>
    );
  }
  return null;
};

CustomizedTooltip.propTypes = {
  active: PropTypes.bool.isRequired,
  payload: PropTypes.array.isRequired,
};

export default CustomizedTooltip;
