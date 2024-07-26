// src/components/Dashboard.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar, { SidebarItem } from "./sidebar";
import Navbar from "./navbar";
import HomeComponent from "../pages/home";
import Students from "../pages/students";
import Attendance from "../pages/attendance";

import SidebarCaps from "./sidebarCaps";
import TakeAttendance from "../pages/takeAttedance";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className="flex h-screen overflow-hidden">
        <SidebarCaps />
        <div className="flex-1 flex flex-col">
          <Navbar toggleSidebar={toggleSidebar} />
          <main className="flex-1 p-10">
            <Routes>
              <Route path="/dashboard" element={<HomeComponent />} />
              <Route path="/students" element={<Students />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/take/attendance" element={<TakeAttendance />} />
              <Route
                path="*"
                element={
                  <h1 className="text-4xl text-black font-bold justify-center items-center h-full w-full">
                    Page Not found
                  </h1>
                }
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
