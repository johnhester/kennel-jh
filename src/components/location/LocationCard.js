import React from "react";

const LocationCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./daSpot.png")} alt="Our Location" />
        </picture>
        <h3>
          <span className="card-petname">
            {props.location.name}
          </span>
        </h3>
        <p>Come see us!</p>
      </div>
    </div>
  );
};

export default LocationCard;