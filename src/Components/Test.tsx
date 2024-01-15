import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Test.css"

interface Character {
  name: string;
  image: string;
}

export const Test = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        const data = response.data.results;

        const characterData: Character[] = data.map((character: any) => ({
          name: character.name,
          image: `https://starwars-visualguide.com/assets/img/characters/${character.url.split('/')[5]}.jpg`,
        }));

        setCharacters(characterData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCharacters();
  }, []);








  return (
    <div>
      <h2>Star Wars Characters</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <h3>{character.name}</h3>
            <img src={character.image} alt={character.name} style={{ maxWidth: '150px' }} />
          </li>
        ))}
      </ul>
    </div>
  )
}