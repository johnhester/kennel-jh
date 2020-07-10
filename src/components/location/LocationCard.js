import React from "react";
import { Link } from "react-router-dom";

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
        <button type="button" onClick={() => props.closeLocation(props.location.id)}>
          Close Location
        </button>
        <Link to={`/locations/${props.location.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LocationCard;