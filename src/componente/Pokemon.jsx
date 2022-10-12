import React, {useState} from 'react'
import {Conex_Api} from './Conex_Api'

const Pokemon = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')
    const estado = Conex_Api(url)
    const {cargando, data} = estado
    cargando? console.log('cargando'):console.log(data.results)


    return(
        <div>
            <h1>Lista de Pokémon</h1>
        </div>
    )
}

export default Pokemon