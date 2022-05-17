import React, { Fragment, useState } from 'react';

export default function Player({id}) {
  const [player, setPlayer] = useState("")
  return (
    <Fragment>
        <div className="details">
          <h1>Detalles del Jugador</h1>
          <div className='view'>
            <div className="">
              <span className="label">Nombre</span>
              <span className="detail">{player.name}</span>
            </div>
            <div className="">
              <span className="label">Apellido</span>
              <span className="detail">{player.lastName}</span>
            </div>
            <div className="">
              <span className="label">Fecha de Nacimiento</span>
              <span className="detail">{player.dob}</span>
            </div>
            <div className="">
              <span className="label">Años</span>
              <span className="detail">{player.dob}</span>
            </div>
            <div className="">
              <span className="label">Posición</span>
              <span className="detail">{player.position}</span>
            </div>
            <div className="">
              <span className="label">Peso</span>
              <span className="detail">{player.weight}</span>
            </div>

            <div className="buttons">
              <button>Editar</button>
              <button>Eliminar</button>
              <button>Salir</button>
            </div>
          </div>
          <div className="edit">
            
          </div>
        </div>
    </Fragment>
  )
}