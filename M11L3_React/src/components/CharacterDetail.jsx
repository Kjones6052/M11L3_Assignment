// Task 3: Implement the Character Detail Feature
//  - Create a functional component 'CharacterDetail' to display the detailed information about a selected character.
//  - Implement a click event handler to fetch additional character details asynchronously when a character thumbnail is clicked.
//  - Use Axios to send a GET request to the Marvel Comics API.
//  - Display the character's name, description, and a list of associated comics.


import React from 'react';

const CharacterDetail = ({ character }) => {
    const comics = character.comics.items;
    const description = character.description;
  return (
    <div className="character-detail">
        <h2>{character.name}</h2>
        <p><strong>Description:</strong> {description}</p>
        <p><strong>Comics:</strong></p>
        {comics.map((i, comic) => {
            <ul>
                <li>{i+1}: {comic.name}</li>
            </ul>
        })}
        
    </div>
  );
};

export default CharacterDetail;