import React from 'react';
import '../styles/AirlineList.css';

const AirlineList = ({ airlines, onRemove, onEdit }) => {
  return (
  <table className="airline-list">
  <thead>
   <tr>
     <th>Name</th>
     <th>Short Name</th>
     <th>Airline Code</th>
     <th>Location</th>
     <th>Created Date</th>
     <th>Actions</th>
   </tr>
 </thead>
 <tbody>
   {airlines.map((airline, index) => (
     <tr key={index} className="airline-item ">
       <td>{airline.name}</td>
       <td>{airline.shortName}</td>
       <td>{airline.airlineCode}</td>
       <td>{airline.location}</td>
       <td>{airline.createdDate.toLocaleString()}</td>
       <td className='airline-actions'>
         <button onClick={() => onRemove(index)}>Remove</button>
         <button onClick={() => onEdit(index)}>Edit</button>
       </td>
     </tr>
   ))}
 </tbody>
</table>
  );
};

export default AirlineList;