import React, { Fragment, useState } from 'react'
import { ToastContainer } from 'react-toastify'

export default function CreatePlayer() {

  const [input, setInput] = useState({
    name: "",
    lastName: "",
    dob: "",
    position: "",
    weight: ""
  });

  const {name, lastName, dob, position, weight} = input

const onChange = (e) => {
  e.preventDefault();
}

  return (
    <Fragment>
        <div>
              <div>
                <form className="new-player-form">
                  <div>
                    <label htmlFor="name">Nombre: </label>
                    <input value={name} onChange={e => onChange(e)} type="text" name="name" id="name" placeholder='Nombre' />
                  </div>
                  <div>
                    <label htmlFor="lastName">Apellido: </label>
                    <input value={lastName} onChange={e => onChange(e)} type="text" name="lastName" id="lastName" placeholder='Apellido' />
                  </div>
                  <div>
                    <label htmlFor="dob">Fecha de Nacimiento: </label>
                    <input value={dob} onChange={e => onChange(e)} type="date" name="dob" id="dob" placeholder='Fecha de Nacimiento' />
                  </div>
                  <div>
                    <label htmlFor="position">Pocisión: </label>
                    <input value={position} onChange={e => onChange(e)} type="text" name="name" id="name" placeholder='Nombre' />
                  </div>
                  <div>
                    <label htmlFor="weight">Peso: </label>
                    <input value={weight} onChange={e => onChange(e)} type="number" name="weight" id="weight" placeholder='Peso en kg' />
                    <span>kg</span>
                  </div>
                  <div>
                    <button>Crear</button>
                  </div>
                </form>
              </div>
        </div>
    </Fragment>
  )
}
