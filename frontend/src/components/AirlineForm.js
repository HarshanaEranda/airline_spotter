import React from 'react';
import '../styles/AirlineForm.css';
import Airline from '../models/Airline';

const AirlineForm = ({ onSubmit }) => {
  const [name, setName] = React.useState('');
  const [shortName, setShortName] = React.useState('');
  const [airlineCode, setAirlineCode] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [createdDate, setCreatedDate] = React.useState(new Date());
  const [createdUserId, setCreatedUserId] = React.useState(null);
  const [modifiedUserId, setModifiedUserId] = React.useState(null);

  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const airline = new Airline(
        name,
        shortName,
        airlineCode,
        location,
        createdDate,
        true,
        false,
        createdUserId,
        modifiedUserId
      );
      onSubmit(airline);
      setName('');
      setShortName('');
      setAirlineCode('');
      setLocation('');
      setCreatedDate(new Date());
      setCreatedUserId(null);
      setModifiedUserId(null);
    } else {
      setErrors(errors);
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!name || name.length > 150) {
      errors.name = 'Name is required and must be less than 150 characters';
    }

    if (!shortName || shortName.length > 5) {
      errors.shortName = 'Short Name is required and must be less than 5 characters';
    }

    const airlineCodeParts = airlineCode.split('-');
    if (airlineCodeParts.length !== 2) {
      errors.airlineCode = 'Airline Code must have a prefix of 3 characters and a suffix of 4 characters separated by a hyphen';
    } else {
      const prefix = airlineCodeParts[0];
      const suffix = airlineCodeParts[1];
      if (prefix.length !== 3) {
        errors.airlineCode = 'Airline Code prefix must be 3 characters';
      } else if (suffix.length !== 4) {
        errors.airlineCode = 'Airline Code suffix must be 4 characters';
      }
    }

    if (!location || location.length > 200) {
      errors.location = 'Location is required and must be less than 200 characters';
    }

    if (createdDate > new Date()) {
      errors.createdDate = 'Created Date must be a valid date in the past';
    }

    return errors;
  };

  return (
    <div className="airline-form">
      <h2>Add Airline Sighting</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="text"
          placeholder="Short Name"
          value={shortName}
          onChange={(e) => setShortName(e.target.value)}
        />
        {errors.shortName && <p className="error">{errors.shortName}</p>}
        <input
          type="text"
          placeholder="Airline Code"
          value={airlineCode}
          onChange={(e) => setAirlineCode(e.target.value)}
        />
        {errors.airlineCode && <p className="error">{errors.airlineCode}</p>}
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        {errors.location && <p className="error">{errors.location}</p>}
        <input
          type="datetime-local"
          value={createdDate.toISOString().slice(0, 16)}
          onChange={(e) => setCreatedDate(new Date(e.target.value))}
        />
        {errors.createdDate && <p className="error">{errors.createdDate}</p>}
        <button type="submit">Add Airline</button>
      </form>
    </div>
  );
};

export default AirlineForm;