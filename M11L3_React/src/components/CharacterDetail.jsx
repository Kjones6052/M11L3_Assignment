// Task 3: Implement the Character Detail Feature
//  - Create a functional component 'CharacterDetail' to display the detailed information about a selected character.
//  - Implement a click event handler to fetch additional character details asynchronously when a character thumbnail is clicked.
//  - Use Axios to send a GET request to the Marvel Comics API.
//  - Display the character's name, description, and a list of associated comics.

import { useState } from 'react';

const CharacterDetail = async (characterId) => {
    const [error, setError] = useState(null);
    const [character, setCharacter] = useState({});

    try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${McApiPubKey}&hash=${McApiHash}`);
        const characterData = await response.data.data.results;
        setCharacter(characterData);
        console.log(characterData);
    } catch (error) {
        setError(error);
    }
    

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!character) {
        return <div>Select a character to view details.</div>;
    }

    return (
        <div className="character-details">
            <h3>{character.name}</h3>
            <p>{character.description || "No description available."}</p>
            <p>
                <strong>Comics:</strong>{" "}
                {character.comics.items.map(comic => comic.name).join(", ")}
            </p>
        </div>
    );
};
export default CharacterDetail;