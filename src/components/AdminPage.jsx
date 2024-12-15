import { useState, useEffect } from "react";
import { FaHome, FaFileAlt, FaAddressBook, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ReportsPage from "./ReportsPage";
import ContactsPage from "./ContactsPage";
import HomePage from "./HomePage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is in session storage
    const user = sessionStorage.getItem("user");
    console.log("User",user);
    if (!user) {
      navigate("/"); // Redirect to login if no user found
    }
  }, [navigate]);

  // Content for each page
  const pageContent = {
    Home: <HomePage />,
    Reports: <ReportsPage />,
    Contacts: <ContactsPage />,
  };

  return (
    <div className="h-screen w-screen overflow-x-hidden flex">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white fixed h-full flex flex-col">
        <h1 className="text-5xl font-bold p-4">My App</h1>
        <div className="flex flex-col gap-4 p-4">
          {/* Navigation Buttons */}
          <br />
          <br />
          <button
            className={`flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-black transition ${
              currentPage === "Home" ? "bg-white text-black" : ""
            }`}
            onClick={() => setCurrentPage("Home")}
          >
            <FaHome />
            Home
          </button>
          <button
            className={`flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-black transition ${
              currentPage === "Reports" ? "bg-white text-black" : ""
            }`}
            onClick={() => setCurrentPage("Reports")}
          >
            <FaFileAlt />
            Reports
          </button>
          <button
            className={`flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-black transition ${
              currentPage === "Contacts" ? "bg-white text-black" : ""
            }`}
            onClick={() => setCurrentPage("Contacts")}
          >
            <FaAddressBook />
            Contacts
          </button>
          <button
            className={`flex items-center gap-2 p-3 rounded-lg hover:bg-white hover:text-red-500 transition bg-black text-red-500`}
            onClick={() => {
              sessionStorage.removeItem("user"); // Clear user data
              navigate("/"); 
            }}
          >
            <FaSignOutAlt className="text-red-500" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-grow bg-slate-100">
        {pageContent[currentPage]}
      </div>
    </div>
  );
};

export default App;
