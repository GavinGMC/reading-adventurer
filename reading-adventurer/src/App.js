import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import StatsPopup from './components/StatsPopup';

function App() {
  // State to manage pages and stats popup
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Initial page set to 1
  
  // Array of story pages (example content)
  const storyPages = [
    { pageNumber: 1, content: "Welcome to page 1. Make your first choice!" },
    { pageNumber: 2, content: "This is page 2. Another decision awaits!" },
    { pageNumber: 3, content: "You’ve made it to page 3. Final decision!" }
  ];

  // Toggle stats popup
  const toggleStatsPopup = () => {
    setIsStatsOpen(!isStatsOpen);
  };

  // Go to the next or previous page
  const goToNextPage = () => {
    if (currentPage < storyPages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      {/* Stats button */}
      <div className="absolute top-4 right-4">
        <button onClick={toggleStatsPopup} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600">
          <FontAwesomeIcon icon={faChartSimple} className="mr-2" />
          Stats
        </button>
      </div>

      {/* Main content */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4">Choose Your Path</h1>
        <p className="text-center mb-6">{storyPages[currentPage - 1].content}</p> {/* Display current page content */}
        
        {/* Choices */}
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Choice 1</button>
          <button className="bg-green-500 text-white py-2 rounded hover:bg-green-600">Choice 2</button>
          <button className="bg-red-500 text-white py-2 rounded hover:bg-red-600">Choice 3</button>
        </div>

        {/* Page navigation */}
        <div className="flex justify-between mt-6">
          <button
            onClick={goToPreviousPage}
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === 1}
          >
            Previous Page
          </button>
          
          <button
            onClick={goToNextPage}
            className={`bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400 ${currentPage === storyPages.length ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentPage === storyPages.length}
          >
            Next Page
          </button>
        </div>
      </div>

      {/* Stats Popup */}
      <StatsPopup isOpen={isStatsOpen} onClose={toggleStatsPopup} />
    </div>
  );
}

export default App;

