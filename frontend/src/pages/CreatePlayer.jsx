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
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label htmlFor="name">Nombre: </label>
                        </td>
                        <td>
                          <input value={name} onChange={e => onChange(e)} type="text" name="name" id="name" placeholder='Nombre' />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="lastName">Apellido: </label>
                        </td>
                        <td>
                          <input value={lastName} onChange={e => onChange(e)} type="text" name="lastName" id="lastName" placeholder='Apellido' />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="dob">Fecha de Nacimiento: </label>
                        </td>
                        <td>
                          <input value={dob} onChange={e => onChange(e)} type="date" name="dob" id="dob" placeholder='Fecha de Nacimiento' />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="position">Pocisión: </label>
                        </td>
                        <td>
                          <input value={position} onChange={e => onChange(e)} type="text" name="name" id="name" placeholder='Nombre' />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label htmlFor="weight">Peso: </label>
                        </td>
                        <td>
                          <input value={weight} onChange={e => onChange(e)} type="number" name="weight" id="weight" placeholder='Peso en kg' />
                        </td>
                        <span>kg</span>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
        </div>
    </Fragment>
  )
}
