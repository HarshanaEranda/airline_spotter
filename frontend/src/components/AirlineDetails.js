import React from 'react';
import '../styles/AirlineDetails.css';

const AirlineDetails = ({ airline }) => {
  return (
    <div className="airline-details">
      <h2>Airline Details</h2>
      <p>Name: {airline.name}</p>
      <p>Short Name: {airline.shortName}</p>
      <p>Airline Code: {airline.airlineCode}</p>
      <p>Location: {airline.location}</p>
      <p>Created Date: {airline.createdDate.toLocaleString()}</p>
    </div>
  );
};

export default AirlineDetails;