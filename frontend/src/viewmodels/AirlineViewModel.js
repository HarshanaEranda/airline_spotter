import { useState, useEffect } from 'react';
import { fetchAirlines, createAirline, updateAirline, deleteAirline } from '../services/api';

const useAirlineViewModel = () => {
  const [airlines, setAirlines] = useState([]);
  const [filteredAirlines, setFilteredAirlines] = useState([]);

  useEffect(() => {
    loadAirlines();
  }, []);

  const loadAirlines = async () => {
    try {
      const airlines = await fetchAirlines();
      setAirlines(airlines);
      setFilteredAirlines(airlines);
    } catch (error) {
      console.error('Error fetching airlines:', error);
    }
  };

  const addAirline = async (airline) => {
    try {
      const newAirline = await createAirline(airline);
      setAirlines((prevAirlines) => [...prevAirlines, newAirline]);
      setFilteredAirlines((prevFilteredAirlines) => [...prevFilteredAirlines, newAirline]);
    } catch (error) {
      console.error('Error creating airline:', error);
    }
  };

  const removeAirline = async (index) => {
    try {
      const airlineId = airlines[index].id;
      await deleteAirline(airlineId);
      setAirlines((prevAirlines) => prevAirlines.filter((_, i) => i !== index));
      setFilteredAirlines((prevFilteredAirlines) => prevFilteredAirlines.filter((_, i) => i !== index));
    } catch (error) {
      console.error('Error deleting airline:', error);
    }
  };

  const editAirline = async (index, updatedAirline) => {
    try {
      const airlineId = airlines[index].id;
      const updatedAirlineData = await updateAirline(airlineId, updatedAirline);
      setAirlines((prevAirlines) => {
        const updatedAirlines = [...prevAirlines];
        updatedAirlines[index] = updatedAirlineData;
        return updatedAirlines;
      });
      setFilteredAirlines((prevFilteredAirlines) => {
        const updatedFilteredAirlines = [...prevFilteredAirlines];
        updatedFilteredAirlines[index] = updatedAirlineData;
        return updatedFilteredAirlines;
      });
    } catch (error) {
      console.error('Error updating airline:', error);
    }
  };

  const filterAirlines = (searchTerm) => {
    setFilteredAirlines(
      airlines.filter(
        (airline) =>
          airline.name.includes(searchTerm) ||
          airline.shortName.includes(searchTerm) ||
          airline.airlineCode.includes(searchTerm)
      )
    );
  };

  return { airlines, filteredAirlines, addAirline, removeAirline, editAirline, filterAirlines };
};

export default useAirlineViewModel;