import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/dashboard'); // Replace '/dashboard' with your desired route
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform!</h1>
      <p className="text-lg mb-6 max-w-md text-center">
        Discover the power of innovation and creativity. Dive into a world of endless possibilities and achieve your goals with us!
      </p>
      <button
        onClick={handleNavigate}
        className="px-6 py-3 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
      >
        Get Started
      </button>
    </div>
  );
};

export default HomePage;