import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import LocationManager from '../../modules/LocationManager';
import './LocationDetail.css'
import LocationWithEmployees from './LocationWithEmployees'

const LocationDetail = props => {
  const [location, setLocation] = useState({ name: "", address: ""});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    //get(id) from LocationManager and hang on to the data; put it into state
    LocationManager.get(props.locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address
        });
        setIsLoading(false)
      });
  }, [props.locationId]);

  const handleDelete = () => {
    //invoke the delete function in LocationManager an re-direct to the location list
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
        props.history.push("/locations")
    )
  }

  return (
    <>
      <div className="card">
        <div className="card-content">
          <picture>
            <img src={require('./daSpot.png')} alt="location" />
          </picture>
          <h3>Name: <span style={{ color: 'darkslategrey' }}>{location.name}</span></h3>
          <p>{location.address}</p>
          <Link to={`/locations/${props.locationId}/edit`}>
            <button>Edit</button>
          </Link>

          <button type="button" disabled={isLoading} onClick={handleDelete}>
            Close
          </button>
        </div>
      </div>
      <LocationWithEmployees {...props} />
    </>
  );
}

export default LocationDetail;