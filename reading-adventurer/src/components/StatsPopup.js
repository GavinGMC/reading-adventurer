import React from 'react';

const StatsPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <div className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 transition-transform ${isOpen ? 'scale-100' : 'scale-95'}`}>
        <h2 className="text-lg font-bold mb-4">Game Stats</h2>
        {/* Your stats content goes here */}
        <p>Good Endings: </p>
        <p>Bad Endings: </p>
        <p>Average Pages per Story: </p>
        <p>Most Pages in One Story: </p>
        <p className='text-amber-500'>Discovered Pages: </p>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default StatsPopup;