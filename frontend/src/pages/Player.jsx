import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
const url = process.env.REACT_APP_BACKEND_URL;

export default function Player({id}) {
  const [player, setPlayer] = useState("")

  useEffect(()=> {
    loadPlayer(id)
  }, [])
  
  const loadPlayer = async(id)=> {
    try {
      const response = await axios.get(`${url}/players/${id}`);
      setPlayer({
        ...response.data,
        age: Math.floor((new Date() - new Date(response.data.dob).getTime()) / 3.15576e+10)
      })
    } catch (error) {
        toast.error(error.respose.data)
        console.log(error);
    }
  }
  console.log(id);
  return (
    <Fragment>
        <div className="details">
          <table className='view'>
            <tbody>
              <tr>
                <td className="label">Nombre: </td>
                <td className="detail">{player.name}</td>
              </tr>
              <tr>
                <td className="label">Apellido: </td>
                <td className="detail">{player.lastName}</td>
              </tr>
              <tr>
                <td className="label">Fecha de Nacimiento: </td>
                <td className="detail">{player.dob}</td>
              </tr>
              <tr>
                <td className="label">Años: </td>
                <td className="detail">{player.age}</td>
              </tr>
              <tr>
                <td className="label">Posición: </td>
                <td className="detail">{player.position}</td>
              </tr>
              <tr>
                <td className="label">Peso: </td>
                <td className="detail">{player.weight}</td>
              </tr>
            </tbody>
          </table>
          <div className="edit">
            
          </div>
        </div>
    </Fragment>
  )
}