// Task 2: Fetch and Display Characters
//  - Create a functional component 'CharacterList' to display a list of Marvel Comics Characters.
//  - Use 'useEffect' hook to fetch character data from the Marvel Comics API using Axios.
//  - Display each character's name and thumbnail image in a grid format.

import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterDetail from './CharacterDetail';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const McApiHash = "a783b08900da50084275249ef1c72bc7";
    const McApiPubKey = "ba1de457fe1a5da3855d1b2f84fb0024";

    // useEffect(): fetch data from api
    useEffect(() => {
        const fetchCharacterData = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${McApiPubKey}&hash=${McApiHash}`);
                if (!response) {
                    throw new Error(`HTTP error! status: ${response.status}`)
                }
                const characterData = await response.data.data.results;
                setCharacters(characterData); 
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCharacterData();
    }, []);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
      };

    if (loading) {
        return <div>Loading characters...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!Array.isArray(characters)) {
        return <div>Error: Characters data is not an array</div>
    }

    return (
        <div>
          <div className="grid-container">
            {characters.map((character) => (
              <div key={character.id} className="character-card" onClick={() => handleCharacterClick(character)}>
                <img 
                    src={`${character.thumbnail.path}.${character.thumbnail.extension}`} 
                    alt={character.name} 
                    width={250}
                    height={250}
                />
                <h3>{character.name}</h3>
              </div>
            ))}
          </div>
    
          {/* Conditionally render CharacterDetail when a character is selected */}
          {selectedCharacter && <CharacterDetail character={selectedCharacter} />}
        </div>
      );

};

export default CharacterList;