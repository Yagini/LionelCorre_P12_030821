import React from "react";
import PropTypes from "prop-types";

import "./InfoCard.css";

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
