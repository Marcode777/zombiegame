var prompt = require('prompt');

prompt.start();

prompt.get(['username', 'email'], function(err, result) {
  if(err) {
    throw err;
  }
  console.log(result.username);
  console.log(result.email);
});

