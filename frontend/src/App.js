// import React from 'react';
// import './App.css';
// import AirlineList from './components/AirlineList';
// import AirlineDetails from './components/AirlineDetails';
// import AirlineForm from './components/AirlineForm';
// import SearchBar from './components/SearchBar';
// import AirlineViewModel from './viewmodels/AirlineViewModel';

// const App = () => {
//   const [viewModel, setViewModel] = React.useState(null);

//   React.useEffect(() => {
//     const vm = new AirlineViewModel();
//     setViewModel(vm);
//   }, []); 
//   const [selectedAirline, setSelectedAirline] = React.useState(null);

//   const handleAddAirline = (airline) => {
//     viewModel.addAirline(airline);
//   };

//   const handleRemoveAirline = (index) => {
//     viewModel.removeAirline(index);
//   };

//   const handleEditAirline = (index) => {
//     setSelectedAirline(viewModel.airlines[index]);
//   };

//   const handleSearch = (searchTerm) => {
//     viewModel.filterAirlines(searchTerm);
//   };

//   return (
//     <div className="app">
//       <header>
//         <h1>Airline Sightings</h1>
//       </header>
//       <main>
//         <div className="search-container">
//           <SearchBar onSearch={handleSearch} />
//         </div>
//         <div className="list-container">
//           <AirlineList
//             airlines={viewModel.filteredAirlines}
//             onRemove={handleRemoveAirline}
//             onEdit={handleEditAirline}
//           />
//         </div>
//         <div className="details-container">
//           {selectedAirline && (
//             <AirlineDetails airline={selectedAirline} />
//           )}
//         </div>
//         <div className="form-container">
//           <AirlineForm onSubmit={handleAddAirline} />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import './App.css';
import AirlineList from './components/AirlineList';
import AirlineDetails from './components/AirlineDetails';
import AirlineForm from './components/AirlineForm';
import SearchBar from './components/SearchBar';
import useAirlineViewModel from './viewmodels/AirlineViewModel';
import AirlineModal from './components/AirlinePopupModal';

const App = () => {
  const {
    airlines,
    filteredAirlines,
    addAirline,
    removeAirline,
    editAirline,
    filterAirlines,
  } = useAirlineViewModel();
  const [selectedAirline, setSelectedAirline] = React.useState(null);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleAddAirline = (airline) => {
    addAirline(airline);
    setIsModalOpen(false);
  };
  const handleRemoveAirline = (index) => {
    removeAirline(index);
  };

  const handleEditAirline = (index) => {
    setSelectedAirline(airlines[index]);
  };

  const handleSearch = (searchTerm) => {
    filterAirlines(searchTerm);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
     <header>
        <h1>Airline Sightings</h1>
        <button onClick={openModal}>Add Airline</button>
      </header>
      <main>
        <div className="search-container">
          <SearchBar onSearch={handleSearch} />
        </div>
        <div className="list-container">
          <AirlineList
            airlines={filteredAirlines}
            onRemove={handleRemoveAirline}
            onEdit={handleEditAirline}
          />
        </div>
        <div className="details-container">
          {selectedAirline && (
            <AirlineDetails airline={selectedAirline} />
          )}
        </div>
        <div className="form-container">
        <AirlineModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={handleAddAirline}
        />
        </div>
       
      </main>
    </div>
  );
};

export default App;