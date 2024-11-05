import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  return (
    <div className="row">
      {characters.map(character => (
        <div className="col-md-4" key={character.id}>
          <CharacterCard character={character} />
        </div>
      ))}
    </div>
  );
}

export default CharacterList;
