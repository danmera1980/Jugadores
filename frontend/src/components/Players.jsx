import React, { useState } from 'react';
import {AiFillEye, AiFillEdit} from 'react-icons/ai';
import {FiUserMinus} from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Players({players, addToField, viewPlayer, editPlayer}) {
  return (
    <div className='playerSection'>
        {
            players && players?.map((player, index) => (
                <div className='playerCard' key={index}>
                    <div>{player.position}</div>
                    <div className="name">{`${player.lastName}, ${player.name}`}</div>
                    <div className="btnSection">
                        <div className="iconBtn normal" onClick={()=>viewPlayer(player.id)}  data-bs-toggle="tooltip" data-bs-placement="top" title="Ver Detalles del Jugador"><AiFillEye/></div>
                        <div className="iconBtn normal" onClick={()=>editPlayer(player.id)}  data-bs-toggle="tooltip" data-bs-placement="bottom" title="Editar Detalles del Jugador"><AiFillEdit/></div>
                        <div className="iconBtn warning"><FiUserMinus/></div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Players