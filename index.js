const fetchBreedDescription = require('./breedFetcher.js');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error! Something went wrong: ', error.message);
  } else if (!desc) {
    console.log(`${breedName} Not Found!`);
  } else if (!error && desc) {
    console.log(`Here is the description: `, desc)
  }
});