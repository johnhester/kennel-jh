import React from "react";

const OwnerCard = props => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./bossBaybay.png")} alt="Da Boss" />
        </picture>
        <h3>
          <span className="card-petname">
            {props.owner.name}
          </span>
        </h3>
        <p>Owner</p>
      </div>
    </div>
  );
};

export default OwnerCard;