import { useEffect, useState } from 'react';
import { getCharacters } from '../services/character.service';

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <ul>
      {characters.map(c => (
        <li key={c.CHARACTER_ID}>{c.CHARACTER_NAME}</li>
      ))}
    </ul>
  );
}

export default CharacterList;
