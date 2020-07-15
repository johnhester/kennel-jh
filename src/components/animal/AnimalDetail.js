import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import AnimalManager from '../../modules/AnimalManager';
// import EmployeeManager from '../../modules/EmployeeManager'
import './AnimalDetail.css'

const AnimalDetail = props => {
  const [animal, setAnimal] = useState({ name: "", breed: "",employeeId:"" });
  // const [employee, setEmployee] = useState({ name: "" })
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from AnimalManager and hang on to the data; put it into state
    AnimalManager.get(props.animalId)
      .then(animal => {
        setAnimal({
          name: animal.name,
          breed: animal.breed,
          handler: animal.employeeId
        });
        setIsLoading(false)
      });

    // EmployeeManager.get(animal.employeeId)
    //   .then(employee => {

    //     console.log(employee)
    //     setEmployee({
          
    //       name: employee.name 
    //     })
    //   })

  }, [props.animalId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    AnimalManager.delete(props.animalId).then(() =>
      props.history.push("/animals")
    );
  };

  // const getHandler = (id) => {
  //   EmployeeManager.get(id)
  //     .then(item => {
  //       console.log(item.name)
  //       return item.name
  //     })
  // }

  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture>
        <h3>Name: <span style={{ color: 'darkslategrey' }}>{animal.name}</span></h3>
        <p>Breed: {animal.breed}</p>
        <p>Handler:{animal.handler}</p>
        <Link to={`/animals/${props.animalId}/edit`}>
          <button>Edit</button>
        </Link>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
}

export default AnimalDetail;