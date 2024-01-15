import React, {useEffect, useState} from 'react'
import "./Poke.css"

interface Pokemon{
    name: string,
    sprites:{
        front_default: string;
    }
}

export const Poke = () => {
    const pokemonData = useState<Pokemon[]>([])




  return (
    <div>Poke</div>
  )
}
