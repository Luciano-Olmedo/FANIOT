import { faBell, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import './Formulario.css'

const Formulario = () => {
    const [campoUno, setCampoUno] = useState('');
    const [campoDos, setCampoDos] = useState('');
    const [campoTres, setCampoTres] = useState('');
    const [campoCuatro, setCampoCuatro] = useState('');



    const onSubmit = (e) => {
        e.preventDefault()


    }

    const onSetCampoUno = (e) => {
        setCampoUno(e.target.value)
    }
    const onSetCampoDos = (e) => {
        setCampoDos(e.target.value)
    }
    const onSetCampoTres = (e) => {
        setCampoTres(e.target.value)
    }
    const onSetCampoCuatro = (e) => {
        setCampoCuatro(e.target.value)
    }

    return (<>

        <h1>Registro de Sensores<FontAwesomeIcon icon={faThermometerThreeQuarters} style={{color:"red",margin:"2.5px"}}/></h1>


        <form action="" onSubmit={onSubmit}>
            <div className="campoUno">
                <label htmlFor="uno">Ingrese el nombre del Sensor</label>
                <input
                    type="text"
                    value={campoUno}
                    onChange={onSetCampoUno}
                ></input>


            </div>
            <div className="campoDos">
                <label htmlFor="dos">Ingrese la temperatura del Sensor</label>
                <input
                    type="text"
                    value={campoDos}
                    onChange={onSetCampoDos}

                ></input>



            </div>
            <div className="campoTres">
                <label htmlFor="tres">Ingrese la fecha de carga del sensor</label>
                <input
                    type="text"
                    value={campoTres}
                    onChange={onSetCampoTres}
                ></input>


            </div>
            <div className="campoCuatro">
                <label htmlFor="cuatro">Ingrese la hora de la medición del sensor</label>
                <input
                    type="text"
                    value={campoCuatro}
                    onChange={onSetCampoCuatro}
                ></input>


            </div>
            <button type="">Enviar Datos</button>


        </form>


    </>);
}

export default Formulario;