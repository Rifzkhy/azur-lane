const azurlane = require("./index.js");

const shipname = "shinano";

azurlane(shipname)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
