import { useState } from 'react';
import { FaHome, FaFileAlt, FaAddressBook, FaSignOutAlt } from 'react-icons/fa';
import ReportsPage from './ReportsPage';

const App = () => {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('Home');

  // Content for each page
  const pageContent = {
    Home: 'Welcome to the Home page! Here you can find an overview of the site.',
    Reports: <ReportsPage />,
    Contacts: 'Welcome to the Contacts page. Find your contacts listed here.',
    Logout: 'You have been logged out. Have a great day!'
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white fixed h-full flex flex-col">
        <h1 className="text-2xl font-bold p-4 border-b border-gray-700">My App</h1>
        <div className="flex flex-col gap-4 p-4">
          {/* Navigation Buttons */}
          <button
            className={`flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-black transition ${
              currentPage === 'Home' ? 'bg-white text-black' : ''
            }`}
            onClick={() => setCurrentPage('Home')}
          >
            <FaHome />
            Home
          </button>
          <button
            className={`flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-black transition ${
              currentPage === 'Reports' ? 'bg-white text-black' : ''
            }`}
            onClick={() => setCurrentPage('Reports')}
          >
            <FaFileAlt />
            Reports
          </button>
          <button
            className={`flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-black transition ${
              currentPage === 'Contacts' ? 'bg-white text-black' : ''
            }`}
            onClick={() => setCurrentPage('Contacts')}
          >
            <FaAddressBook />
            Contacts
          </button>
          <button
            className={`flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-black transition ${
              currentPage === 'Logout' ? 'bg-white text-black' : ''
            }`}
            onClick={() => setCurrentPage('Logout')}
          >
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-80 mt-10 flex-grow p-6">
        {pageContent[currentPage]}
      </div>
    </div>
  );
};

export default App;
