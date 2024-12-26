// Task 2: Fetch and Display Characters
//  - Create a functional component 'CharacterList' to display a list of Marvel Comics Characters.
//  - Use 'useEffect' hook to fetch character data from the Marvel Comics API using Axios.
//  - Display each character's name and thumbnail image in a grid format.



// API Endpoint = `https://gateway.marvel.com/v1/publts=1$apikey=${McApiPubKey}&hash=${McApiHash}`

// Import
import { useEffect, useState } from "react";
import axios from 'axios';

// Create Functional Component 'CharacterList'
const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
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
                const characterData = await response.json;
                setCharacters(characterData); 
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchCharacterData();
    }, []);

    if (loading) {
        return <div>Loading characters...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

    if (!Array.isArray(characters)) {
        return <div>Error: Characters data is not an array</div>
    }

    // Display each character's name and thumbnail image in a grid format
    return (
        <div>
            <h1>Marvel Comics Characters</h1>
            <div className="grid-container">
                {characters.map(character => (
                    <div key={character.id} className="grid-item">
                        {character.name}
                        <img src={character.thumbnail?.path + '.' + character.thumbnail?.extension} alt={character.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

// Export
export default CharacterList;