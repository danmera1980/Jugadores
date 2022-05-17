import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
import CreatePlayer from './CreatePlayer';
import Player from './Player';
import Players from '../components/Players';
import Alignment from '../components/Alignment';
const url = process.env.REACT_APP_BACKEND_URL;

export default function Dashboard() {

    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        getPlayers();
    }, [])


    const getPlayers = async () => {
        try {
            const response = await axios.get(`${url}/players`);
            setPlayers(response.data)
        } catch (error) {
            toast.error(error.respose.data)
            console.log(error);
        }
    }

    console.log(players);

  return (
    <Fragment>
        <ToastContainer />
        <div className="dashboard">
            <div className="main">
                <Header/>
                <div className="content">
                    <div className="players">
                        <h3>Players</h3>
                        <Players players={players}/>
                    </div>
                    <div className="alignment">
                        <Alignment/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
