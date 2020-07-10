import React, { useState, useEffect } from 'react';
//import the components we will need
import AnimalCard from './AnimalCard';
import AnimalManager from '../../modules/AnimalManager';

const AnimalList = (props) => {
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return AnimalManager.getAll().then(animalsFromAPI => {
        console.log(animalsFromAPI)
      setAnimals(animalsFromAPI)
    });
  };

  //lets delete animals
  //this function can be passed to child components
  const deleteAnimal = id => {
    AnimalManager.delete(id)
      .then(() => AnimalManager.getAll().then(setAnimals));
  };


  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    
    <>
      {/* new aminal button */}
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {props.history.push("/animals/new")}}>
            Admit Animal
        </button>
      </section>
      {/* animal cards  */}
      <div className="container-cards">
        {animals.map(animal => 
          <AnimalCard 
            key={animal.id} 
            animal={animal} 
            deleteAnimal={deleteAnimal}
            />)}
      </div>
    </>
  );
};
export default AnimalList