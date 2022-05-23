import React, { useEffect, useState } from 'react';
import fieldImage from '../assets/images/field.jpg';

function Alignment({alignment}) {
    const [align, setAlign] = useState('')
    const [positions, setPositions] = useState('')
    const alignOptions = [
        '1-4-5-1',
        '1-4-1-4-1',
        '1-4-2-3-1',
        '1-4-3-2-1',
        '1-4-4-2',
        '1-4-4-1-1',
        '1-4-1-3-2',
        '1-4-2-2-2',
        '1-4-3-3',
        '1-3-4-3',
        '1-3-1-3-3',
        '1-3-3-1-3',
        '1-3-3-3-1'
    ]


    const onChangeOption = (e) => {
        setAlign(e.target.value);
    }
    
    useEffect(()=>{
        switch (align) {
            case "0":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                            <div className='place' id=''>MC{alignment[8]}</div>
                            <div className='place' id=''>MC{alignment[9]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;
            case "1":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                            <div className='place' id=''>MC{alignment[8]}</div>
                            <div className='place' id=''>MC{alignment[9]}</div>
                        </div>
                        <div className="line" id='line4'>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;
        
            case "2":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[7]}</div>
                            <div className='place' id=''>MC{alignment[8]}</div>
                            <div className='place' id=''>MC{alignment[9]}</div>
                        </div>
                        <div className="line" id='line4'>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;

            case "3":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[8]}</div>
                            <div className='place' id=''>MC{alignment[9]}</div>
                        </div>
                        <div className="line" id='line4'>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;
    
            case "4":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                            <div className='place' id=''>MC{alignment[8]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[9]}</div>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;
        
            case "5":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                            <div className='place' id=''>MC{alignment[8]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>D{alignment[9]}</div>
                        </div>
                        <div className="line" id='line4'>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;
            case "6":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                        </div>
                        <div className="line" id='line4'>
                            <div className='place' id=''>MC{alignment[8]}</div>
                        </div>
                        <div className="line" id='line5'>
                            <div className='place' id=''>D{alignment[9]}</div>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;

            case "7":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[7]}</div>
                            <div className='place' id=''>MC{alignment[8]}</div>
                        </div>
                        <div className="line" id='line4'>
                            <div className='place' id=''>D{alignment[9]}</div>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;

            case "8":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                            <div className='place' id=''>DF{alignment[4]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[8]}</div>
                            <div className='place' id=''>D{alignment[9]}</div>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;

            case "9":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[4]}</div>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>D{alignment[8]}</div>
                            <div className='place' id=''>MC{alignment[9]}</div>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;

            case "10":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[4]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                            <div className='place' id=''>MC{alignment[7]}</div>
                        </div>
                        <div className="line" id="line4">
                            <div className='place' id=''>D{alignment[8]}</div>
                            <div className='place' id=''>MC{alignment[9]}</div>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;

            case "11":
                setPositions(()=> (
                    <div className='position'>
                        <div className="line" id='line0'>
                            <div className='place' id='gm'>GM{alignment[0]}</div>
                        </div>
                        <div className="line" id='line1'>
                            <div className='place' id=''>DF{alignment[1]}</div>
                            <div className='place' id=''>DF{alignment[2]}</div>
                            <div className='place' id=''>DF{alignment[3]}</div>
                        </div>
                        <div className="line" id='line2'>
                            <div className='place' id=''>MC{alignment[4]}</div>
                            <div className='place' id=''>MC{alignment[5]}</div>
                            <div className='place' id=''>MC{alignment[6]}</div>
                        </div>
                        <div className="line" id='line3'>
                            <div className='place' id=''>MC{alignment[7]}</div>
                        </div>
                        <div className="line" id="line4">
                            <div className='place' id=''>D{alignment[8]}</div>
                            <div className='place' id=''>MC{alignment[9]}</div>
                            <div className='place' id=''>D{alignment[10]}</div>
                        </div>
                    </div>
                ))
                break;
            case "12":
                    setPositions(()=> (
                        <div className='position'>
                            <div className="line" id='line0'>
                                <div className='place' id='gm'>GM{alignment[0]}</div>
                            </div>
                            <div className="line" id='line1'>
                                <div className='place' id=''>DF{alignment[1]}</div>
                                <div className='place' id=''>DF{alignment[2]}</div>
                                <div className='place' id=''>DF{alignment[3]}</div>
                            </div>
                            <div className="line" id='line2'>
                                <div className='place' id=''>MC{alignment[4]}</div>
                                <div className='place' id=''>MC{alignment[5]}</div>
                                <div className='place' id=''>MC{alignment[6]}</div>
                            </div>
                            <div className="line" id='line3'>
                                <div className='place' id=''>MC{alignment[7]}</div>
                                <div className='place' id=''>D{alignment[8]}</div>
                                <div className='place' id=''>MC{alignment[9]}</div>
                            </div>
                            <div className="line" id="line4">
                                <div className='place' id=''>D{alignment[10]}</div>
                            </div>
                        </div>
                    ))
                    break;
            default:
                setPositions('')
                break;
        }
        console.log(align, positions);
    }, [align])



  return (
    <div className='field'>
        <div className='select'>
            <label htmlFor="alignSelect">Seleccione la Alineación</label>
            <select name="alignSelect" id="alignSelect" onChange={(e)=>onChangeOption(e)}>
                <option value="">---</option>
                {alignOptions.map((a, index)=>(
                    <option key={index} value={index}>{a}</option>
                ))}
            </select>
        </div>
        <div className="court">
            <img src={fieldImage} alt="field" />
            <div className="positions">
                {positions}
            </div>
        </div>
    </div>
  )
}

export default Alignment