export async function getCharacters() {
  const response = await fetch('http://localhost:3001/api/characters');
  return await response.json();
}
