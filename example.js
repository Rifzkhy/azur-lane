const {searchCharacter} = require("@rifzkhy/azur-lane");

const character = "Shinano";

searchCharacter(character)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
