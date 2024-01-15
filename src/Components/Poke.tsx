import React, {useEffect, useState} from 'react'
import "./Poke.css"

interface Pokemon{
    name: string,
    sprites:{
        front_default: string;
    }
}

export const Poke = () => {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([])

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response= await fetch('https://pokeapi.co/api/v2/pokemon/')
                console.log(response);
                
            } catch (error) {
                
            }
        }
        fetchData();
    },[])



  return (
    <div>Poke</div>
  )
}