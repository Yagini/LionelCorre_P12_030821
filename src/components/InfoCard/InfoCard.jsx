import React from "react";

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

export default InfoCard;
