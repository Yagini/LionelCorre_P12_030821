import React from "react";
import PropTypes from "prop-types";

import "./InfoCard.css";

/**
 * Component use in the dashboard for build a aside section
 * @param {string} src the source of the image
 * @param {string} title the alt of the image
 * @param {string} data the data used for get value of user energy profile
 * @param {string} type the text for card
 */

function InfoCard({ src, title, data, type }) {
  return (
    <div className="infoCard__container">
      <img src={src} alt={title} className="infoCard__img" />
      <div className="infoCard__content">
        <h2 className="infoCard__title">{data}</h2>
        <p className="infoCard__text">{type}</p>
      </div>
    </div>
  );
}

InfoCard.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InfoCard;
