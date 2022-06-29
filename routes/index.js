var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/current',function(req, res, next){
  const axios = require('axios');
  //console.log(res)
  const params = {
    access_key: '06c9a2f35679fd4235083233be32e9f1',
    query: res.city
  }

  axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const apiResponse = response.data;
        console.log(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
      }).catch(error => {
    console.log(error);
  });
})


// API Key: 06c9a2f35679fd4235083233be32e9f1
// Base URL: http://api.weatherstack.com/

module.exports = router;
