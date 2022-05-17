import React, { useState } from 'react';
import {AiFillEye, AiFillEdit} from 'react-icons/ai';
import {FiUserMinus} from 'react-icons/fi';

function Players({players}) {
    console.log(players);
  return (
    <div className='playerSection'>
        {
            players && players?.map(player => (
                <div className="playerCard" key={player.id}>
                    <div className="position">{player.position}</div>
                    <div className="name">{`${player.lastName}, ${player.name}`}</div>
                    <div className="btnSection">
                        <div className="iconBtn normal"><AiFillEye/></div>
                        <div className="iconBtn normal"><AiFillEdit/></div>
                        <div className="iconBtn warning"><FiUserMinus/></div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Players