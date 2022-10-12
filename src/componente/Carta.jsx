import React from 'react'
import {Conex_Api} from './Conex_Api'

export const Carta = ({url}) => {
    const estado = Conex_Api(url)
    const {cargando, data} = estado

    return (
        <div>
            {
                cargando
                ?
                <h1>Cargando</h1>
                :
                <div className=''>
                    <div>
                        <h5></h5>
                    </div>
                    <div>
                        <img src='' alt='pokemon'></img>
                    </div>
                    <div>
                        <p></p>
                    </div>
                </div>
            }
        </div>
    )
}