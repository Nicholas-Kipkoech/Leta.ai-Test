import React from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";

import ProtectedRoute from "./Pages/Dashboard/ProtectedRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Add from "./Pages/Dashboard/Add";
import Edit from "./Pages/Dashboard/Edit";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard/add" element={<Add />} />
            <Route path="/dashboard/edit/:id" element={<Edit />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
