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
        <p>Contact: {props.owner.phoneNumber} </p>
        <button 
          type="button"  
          onClick={() => props.removeOwner(props.owner.id)}
        >
          Owner Resigned
        </button>
        <button 
          type="button"
          onClick={() => props.history.push(`/owners/${props.owner.id}/edit`)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default OwnerCard;