import React, { useState, useEffect } from 'react'
import EmployeeManager from '../../modules/EmployeeManager'
import AnimalManager from '../../modules/AnimalManager'
import AnimalCard from '../animal/AnimalCard'

const EmployeeWithAnimals = props => {
    const [employee, setEmployee] = useState({})
    const [animals, setAnimals] = useState([])

    useEffect(() => {
        //got here now make call to get employee with animal
        EmployeeManager.getWithAnimals(props.match.params.employeeId)
            .then(APIResult => {
                setEmployee(APIResult)
                setAnimals(APIResult.animals)
            })
    },[props.match.params.employeeId, animals])

    const deleteAnimal = id => {
        AnimalManager.delete(id)
            .then(EmployeeManager.getWithAnimals(props.match.params.employeeId)
                    .then(APIResult => {
                        setEmployee(APIResult)
                        setAnimals(APIResult.animals)
                    })
            );
    };

    return (
        <div className="card">
             <div className="card-content">
                <h3>
                <span className="card-petname">
                    {employee.name}
                </span>
                </h3>
                <p><strong>Position: {employee.position}</strong></p>

                <p>{employee.name}'s buddies:</p>
                {animals.map(animal =>
                    <AnimalCard
                        key={animal.id}
                        animal={animal}
                        deleteAnimal={deleteAnimal}
                        {...props}
                    />
                )}
            </div>
        </div>
    )
}


export default EmployeeWithAnimals
