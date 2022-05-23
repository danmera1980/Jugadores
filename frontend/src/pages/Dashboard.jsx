import React, {Fragment, useState, useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Header from '../components/Header';
import 'react-toastify/dist/ReactToastify.css';
import CreatePlayer from './CreatePlayer';
import Player from './Player';
import Players from '../components/Players';
import Alignment from '../components/Alignment';
import {FiUserPlus} from 'react-icons/fi'
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
const url = process.env.REACT_APP_BACKEND_URL;

export default function Dashboard() {

    const [players, setPlayers] = useState([]);
    const [alignment, setAlignment] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [modalParams, setModalParams] = useState({
        title: 'My Title',
        body: 'Here Goes Body',
        footer: ['close','ok']
    })
    const [showModal, setShowModal] = useState(false)



    useEffect(()=>{
        getPlayers();
    }, [])

    useEffect(()=>{
        console.log(alignment);
    }, [alignment])


    const getPlayers = async () => {
        try {
            const response = await axios.get(`${url}/players`);
            setPlayers(response.data)
        } catch (error) {
            toast.error(error.respose.data)
            console.log(error);
        }
    }

    const addToField = (playerId, index) => {
        setAlignment([
            ...alignment.slice(0, index),
            playerId,
            ...alignment.slice(index + 1, alignment.length)

        ])
    }

    const newPlayer = () => {
        setModalParams({
            title: 'Crear nuevo Jugador',
            body: <CreatePlayer/>,
            footer: ['cancel', 'save']
        })
        setShowModal(true)
    }

    const viewPlayer = (id) => {
        setModalParams({
            title: 'Detalles del Jugador',
            body: <Player id={id}/>,
            footer: ['ok']
        })
        setShowModal(true)
    }

    const editPlayer = (id) => {
        setModalParams({
            title: 'Editar Jugador',
            body: <Player id={id}/>,
            footer: ['cancel', 'update']
        })
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }

  return (
    <Fragment>
        <ToastContainer />
        <Modal 
            title={modalParams.title} 
            body={modalParams.body} 
            footer={modalParams.footer}
            show={showModal}
            onClose={closeModal}
        />
        <div className="dashboard">
            <div className="main">
                <Header/>
                <div className="content">
                    <div className="players">
                        <div className="playersHeader">
                            <h3>Jugadores</h3>
                            <FiUserPlus className='iconBtn normal' onClick={()=>newPlayer()} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Nuevo Jugador"/>
                        </div>
                            <Players players={players} addToField={addToField} viewPlayer={viewPlayer} editPlayer={editPlayer}/>
                    </div>
                    <div className="alignment">
                        <h3>Alineación</h3>
                        <Alignment alignment={alignment}/>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}
