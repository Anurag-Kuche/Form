import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}
