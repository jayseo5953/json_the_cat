const request = require('request');
const breed = process.argv[2];
const source = 'https://api.thecatapi.com/v1/breeds/search' + '?q=' + breed;

request.get(source, (error, response, body)=> {
  if (error) {
    console.log("Error Message: ", error.message);
  } else {
    const dataArr = JSON.parse(body);
    const dataObj = dataArr[0];
    if (dataArr.length === 0) {
      console.log("Breed not found");
    } else {
      const desc = dataObj['description'];
      console.log(desc);
    }
  }
});