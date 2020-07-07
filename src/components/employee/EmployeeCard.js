import React from "react";

const EmployeeCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./detective.png")} alt="My Employee" />
        </picture>
        <h3>
          <span className="card-petname">Cedric</span>
        </h3>
        <p>Employee</p>
        <p>Position: Dog Finder</p>
      </div>
    </div>
  );
};

export default EmployeeCard;