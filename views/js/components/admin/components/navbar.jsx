import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-gray-100 text-black p-4 flex flex-row-reverse justify-between items-center">
      <button onClick={toggleSidebar} className="hidden focus:outline-none">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <h1 className="text-xl font-bold">Attendance</h1>
    </nav>
  );
};

export default Navbar;
