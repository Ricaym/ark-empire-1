import { useEffect, useState } from 'react';
import { getCharacters } from '../services/character.service';
import '../stylesheets/CharacterList.css'

function CharacterList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(setCharacters);
  }, []);

  return (
    <div>
      {characters.map(c => (
        <p key={c.CHARACTER_ID}>{c.CHARACTER_NAME}</p>
      ))}
    </div>
  );
}

export default CharacterList;
