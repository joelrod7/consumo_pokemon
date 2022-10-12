import React from 'react'
import {Carta} from './Carta'

export const Carta = ({url}) => {
    return (
        <div className='container'>
            <ul className='detalles'>
                {
                    results.map( p=>(
                        <li>
                            <Carta url={p.url}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}