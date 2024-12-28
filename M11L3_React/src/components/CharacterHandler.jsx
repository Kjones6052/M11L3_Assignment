
import CharacterDetail from './CharacterDetail';

export async function handleCharacterClick(characterId) {
    return CharacterDetail(characterId);
};


// let characterName;
//     let characterDescription;
//     let characterComics;
//     try {
//         const response = axios.get(
//             `https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=${McApiPubKey}&hash=${McApiHash}`
//         );
//         const characterData = response[Object].data;
//         console.log(characterData);
        
//         // characterName = characterData.name;
//         // characterDescription = characterData.description;
//         // characterComics = characterData.comics;
//         // console.log(characterName, characterDescription, characterComics);
//     } catch (error) {
//         console.log(error);
//     } 