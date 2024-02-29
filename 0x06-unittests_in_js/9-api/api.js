const express = require('express');
const app = express();
const port = 7865;

// Define a route for GET /
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// Define a route for GET /cart/:id
app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

// Start the server
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
