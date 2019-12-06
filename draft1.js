const request = require('request');
const breed = process.argv[2];



let fetchBreedDescription = (breed) => {
  const source = 'https://api.thecatapi.com/v1/breeds/search' + '?q=' + breed;
  request(source, (err, response, body)=> {
    if (err) {
      console.log("Error Message: ", error.message);
    } else {
      const dataArr = JSON.parse(body);
      const dataObj = dataArr[0];
      if (dataArr.length === 0) {
        console.log("Breed not found");
      } else {
        description = dataObj['description'];
        console.log(description);
      }
    }
  });

};
fetchBreedDescription(breed)



module.exports = fetchBreedDescription;

