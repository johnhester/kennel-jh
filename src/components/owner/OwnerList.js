import React, { useState, useEffect } from 'react';
//import the components we will need
import OwnerCard from './OwnerCard';
import OwnerManager from '../../modules/OwnerManager';

const OwnerList = props => {
  // The initial state is an empty array
  const [owners, setOwners] = useState([]);

  const getOwners = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return OwnerManager.getAll().then(ownersFromAPI => {
        console.log(ownersFromAPI)
        setOwners(ownersFromAPI)
    });
  };

  //lets remove owners
  //this function can be passed to child components
  const deleteOwner = id => {
    OwnerManager.delete(id)
      .then(() => OwnerManager.getAll().then(setOwners));
  };


  // got the animals from the API on the component's first render
  useEffect(() => {
    getOwners();
  }, []);

  // Finally we use map() to "loop over" the animals array to show a list of animal cards
  return (
    <>
      <section className="section-content">
        <button type="button"
          className="btn"
          onClick={() => {props.history.push("/owners/new")}}>
          Add Owner
        </button>
      </section>
      <div className="container-cards">
        {owners.map(owner => 
          <OwnerCard 
            key={owner.id} 
            owner={owner}
            removeOwner={deleteOwner}
            {...props}
          />
        )}
      </div>
    </>
  );
};
export default OwnerList