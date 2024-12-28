

export default async function CharacterDetail(characterId) {
    let characterName;
    let characterDescription;
    let characterComics = [];

    try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${McApiPubKey}&hash=${McApiHash}`);
        const characterData = await response.data.data.results;
        for (let character in characterData) {
            if (character.id == characterId) {
                characterName = characterData.name;
                characterDescription = characterData.description;
                characterComics.push(characterData.comics);
            }
        } 
    } catch (error) {
        console.log(error);
    }
    return (
        <div className="character-details">
            <h3>{characterName}</h3>
            <p>{characterDescription || "No description available."}</p>
            <p>
                <strong>Comics:</strong>{" "}
                {characterComics}
            </p>
        </div>
    );
};