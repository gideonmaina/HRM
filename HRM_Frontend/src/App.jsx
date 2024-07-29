import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Dashboard/Home";
import Staff from "./components/Dashboard/Staff";
import Profile from "./components/Dashboard/Profile";
import Logout from "./components/Dashboard/Logout";
import AddStaff from "./components/Dashboard/AddStaff";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckSquare,
  faGauge,
  faUsers,
  faUser,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

library.add(faCheckSquare, faGauge, faUser, faUsers, faPowerOff, faBell);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/dashboard/staff" element={<Staff />}></Route>
            <Route path="/dashboard/profile" element={<Profile />}></Route>
            <Route path="/dashboard/logout" element={<Logout />}></Route>
            <Route
              path="/dashboard/staff/add-staff"
              element={<AddStaff />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
