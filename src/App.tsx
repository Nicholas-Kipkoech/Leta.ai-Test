import React, { useEffect } from "react";
import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Pages/Auth/Login";

import ProtectedRoute from "./Pages/Dashboard/ProtectedRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Add from "./Pages/Dashboard/Add";
import Edit from "./Pages/Dashboard/Edit";
import { AuthServiceClient } from "./generated/AuthServiceClientPb";
import Cookies from "js-cookie";
import { RefreshAccessTokenRequest } from "./generated/auth_pb";
import decode from "jwt-decode";
const authClient = new AuthServiceClient("http://localhost:8080");
function App() {
  const refreshToken: any = Cookies.get("refreshToken");
  const accessToken: any = Cookies.get("accessToken");

  useEffect(() => {
    const decodedToken: any = decode(accessToken);
    //check if the token is expired
    if (
      decodedToken &&
      decodedToken.exp &&
      decodedToken.exp < Date.now() / 1000
    ) {
      console.log("token expired");
      console.log("refreshToken=====", refreshToken);
      const request = new RefreshAccessTokenRequest();
      request.setRefreshtoken(refreshToken);
      authClient.refreshAccessToken(request, {}, (err, response) => {
        if (err) {
          console.log(err);
          return;
        }
        ///get new access token from the response and set it
        const newAccessToken = response.getAccesstoken();
        Cookies.set("accessToken", newAccessToken);
      });
    }
  }, []);
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
