import React, { useEffect, useState } from "react";
import "./App.css";

import Home from "./Pages/Home/hOME.JSX";

import Login from "./Pages/Login/Login";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            Object.keys(user).length === 2 ? <Home /> : <Navigate to="/login" />
          }
        />
        <Route
          path="/login"
          element={
            Object.keys(user).length === 2 ? <Navigate to="/" /> : <Login />
          }
        />
      </Routes>
    </Router>
  );
};

export default React.memo(App);
