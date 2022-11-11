 const fetch = require("node-fetch");

 fetch("https://pokeapi.co/api/v2/pokemon")
 .then((response) => response.json())
 .then((data) => console.table(data.results))
 .catch((error) => console.log(error));