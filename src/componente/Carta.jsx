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
                <div className='' style={{width: '14rem'}}>
                    <div>
                        <h5>{data.id}</h5>
                    </div>
                    <div>
                        <img src={data.sprites.front_default} alt='pokemon'/>
                    </div>
                    <div>
                        <p>{data.forms[0].name}</p>
                    </div>
                </div>
            }
        </div>
    )
}