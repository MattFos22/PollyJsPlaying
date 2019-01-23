const fetch = require('node-fetch');

module.exports = async id => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  return await response.json();
};