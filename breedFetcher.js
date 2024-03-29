const request = require('request');
// const breed = process.argv[2];


let fetchBreedDescription = (breed, callback) => {
  const source = 'https://api.thecatapi.com/v1/breeds/search' + '?q=' + breed;
  
  request(source, (err, response, body)=> {
    if (err) {
      callback(err,null);
    } else {
      const dataArr = JSON.parse(body);
      const dataObj = dataArr[0];
      if (dataArr.length === 0) {
        callback(null,null)
      } else {
        let description = dataObj['description'];
        callback(null, description)
      }
    }
  });

};



module.exports = fetchBreedDescription;

