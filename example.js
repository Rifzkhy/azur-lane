const searchCharacter = require ("./index.js");

const character = "Shinano";

searchCharacter(character)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
