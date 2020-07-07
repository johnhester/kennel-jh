import React from "react";

const LocationCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./daSpot.png")} alt="Our Location" />
        </picture>
        <h3>
          <span className="card-petname">Student Kennels</span>
        </h3>
        <p>500 Puppy Way</p>
        <p>Come see us!</p>
      </div>
    </div>
  );
};

export default LocationCard;