// backend is run on port 5000
const axios = require('axios');

// Get the events owned by a given user -- still need to access username of logged in user
const options = {
    headers: {'username': 'value'}
  };
axios.get('localhost:5000/events')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });