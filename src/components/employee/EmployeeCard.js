import React from "react";
// import "../animal/Animal.css"

const EmployeeCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./detective.png")} alt="My Employee" />
        </picture>
        <h3>
          <span className="card-petname">
            {props.employee.name}
          </span>
        </h3>
        <p>Position: {props.employee.position}</p>
        <button type="button" onClick={() => props.fireEmployee(props.employee.id)}>Fire</button>
        <button type="button" onClick={() => props.history.push(`/employees/${props.employee.id}/edit`)}>Edit</button>
      </div>
    </div>
  );
};

export default EmployeeCard; 