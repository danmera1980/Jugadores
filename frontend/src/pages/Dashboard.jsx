import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
const url = process.env.REACT_APP_BACKEND_URL;

export default function Dashboard() {
  return (
    <Fragment>
        <ToastContainer />
        <div className="dashboard">
            <div className="main">
                <Header/>
                <h1>Dashboard</h1>
            </div>
        </div>
    </Fragment>
  )
}
