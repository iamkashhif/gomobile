import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ZipcodePopup = ({ onClose }) => {
  const [zipcode, setZipcode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (zipcode!=="") {
      navigate('/admin');
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80 relative">
        <h2 className="text-center font-bold mb-4">Enter your ZIP code</h2>
        <p className="text-center font-semibold font-opensans text-xs mb-4">This allows us to display available products, top installers in your area, and accurate shipping times.</p>
        <input 
          type="text" 
          placeholder="Enter Zip Code" 
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          className="w-full border p-2 mb-4 bg-customGrey text-center text-sm font-semibold rounded-md"
        />
        <button 
          onClick={handleSubmit}
          className="bg-customRed text-sm font-opensans font-semibold text-white w-full py-2 rounded-lg"
        >
          Show Results 
        </button>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-customTextGrey2 hover:text-black"
        >
          <FaTimes size={16} />
        </button>
      </div>
    </div>
  );
};

export default ZipcodePopup;
