import axios from "axios";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CreatePlayer from "./pages/CreatePlayer";
import Player from "./pages/Player";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const backend_url = process.env.REACT_APP_BACKEND_URL

function App() {
  
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Dashboard/>} />
        <Route exact path="/new" element={<CreatePlayer/>}/>
        <Route exact path="/player" element={<Player/>}/>
      </Routes>
    </React.Fragment>
  );
}

export default App;
