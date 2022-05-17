import React, { useState } from 'react';
import {AiFillEye, AiFillEdit} from 'react-icons/ai';

function Players({players}) {
    console.log(players);
  return (
    <div className='playerSection'>
        {
            players && players?.map(player => (
                <div className="playerCard" key={player.id}>
                    <div className="position column">{player.position}</div>
                    <div className="name column">{`${player.lastName}, ${player.name}`}</div>
                    <div className="btnSection column">
                        <div className="cardBtn"><AiFillEye/></div>
                        <div className="cardBtn"><AiFillEdit/></div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Players