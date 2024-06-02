const API_BASE_URL = 'http://localhost:5065/api/AirlineSightings';

export const fetchAirlines = async () => {
  const response = await fetch(`${API_BASE_URL}`);
  return await response.json();
};

export const createAirline = async (airline) => {
  const response = await fetch(`${API_BASE_URL}/airlines`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(airline),
  });
  return await response.json();
};

export const updateAirline = async (airlineId, updatedAirline) => {
  const response = await fetch(`${API_BASE_URL}/airlines/${airlineId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedAirline),
  });
  return await response.json();
};

export const deleteAirline = async (airlineId) => {
  const response = await fetch(`${API_BASE_URL}/airlines/${airlineId}`, {
    method: 'DELETE',
  });
  return await response.json();
};