const { getConnection } = require('../config/db');

async function getAllCharacters() {
  const connection = await getConnection();

  const result = await connection.execute(
    `SELECT character_id, character_name FROM characters`
  );

  await connection.close();
  return result.rows;
}

module.exports = { getAllCharacters };
