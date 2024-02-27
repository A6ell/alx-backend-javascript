const express = require('express');

const app = express();

// Handle root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server listening on port 1245');
});

module.exports = app;
