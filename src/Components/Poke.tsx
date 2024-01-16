import React, {useEffect, useState} from 'react'
import "./Poke.css"

interface Pokemon{
    name: string;
    image: string;
}

export const Poke = () => {
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([])

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const response= await fetch('https://pokeapi.co/api/v2/pokemon/')
                const data = await response.json();
                
                const pokemonList: Pokemon[] =[];

                const fetchPokemonDetails = async (result :{name: string; url: string}) => {
                    const pokemonResponse = await fetch(result.url);
                    const pokemonData = await pokemonResponse.json();

                    pokemonList.push({
                        name: result.name,
                        image: pokemonData.sprites.front_default,
                    });
                }

                data.results.forEach(fetchPokemonDetails);
                setPokemonData(pokemonList)
            } catch (error) {
                console.error('Error fetching Pokemon data:', error);
            }
        }
        fetchData();
    },[])



  return (
    <div>Poke</div>
  )
}
