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
            {props.locations.name}
          </span>
        </h3>
        <p>{props.locations.address}</p>
        <button type="button" onClick={() => props.closeLocation(props.locations.id)}>
          Close Location
        </button>
        <Link to={`/locations/${props.locations.id}`}>
          <button>Details</button>
        </Link>
        <button type="button" onClick={() => {props.history.push(`/locations/${props.locations.id}/edit`)}}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default LocationCard;