import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Dashboard = () => {
  return (
    <div>
      <div>
        <div className="dashboard-container">
          {/* Dashboard Side Bar */}
          <div className="dashboard-sidebar">
            <div className="home-logo">
              <Link to="/dashboard">HRM</Link>
            </div>
            <ul className="flex flex-col gap-4">
              <li>
                <FontAwesomeIcon icon={["fas", "gauge"]} />
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-users" />
                <Link to="/dashboard/staff">Manage Staff</Link>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-user" />
                <Link to="/dashboard/profile">Profile</Link>
              </li>
              <li>
                <FontAwesomeIcon icon="fa-solid fa-power-off" />
                <Link to="/dashboard/logout">Logout</Link>
              </li>
            </ul>
          </div>

          <div className="dashboard-content-container w-full">
            {/* <h1>header</h1> */}
            <div className="flex items-center justify-end gap-8 py-4 pr-4 shadow mb-8">
              <div>
                <FontAwesomeIcon
                  icon="fa-regular fa-bell"
                  style={{ color: "#74C0FC", fontSize: "28px" }}
                />
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <h6>John Doe</h6>
                  <p>Admin</p>
                </div>
                {/* avatar */}
                <div className="border w-[48px] h-[48px] rounded-full shadow-lg flex items-center justify-center ">
                  <FontAwesomeIcon
                    icon="fa-solid fa-user"
                    className="text-3xl text-[#74C0FC]"
                  />
                </div>
              </div>
            </div>
            <div className="px-10">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
