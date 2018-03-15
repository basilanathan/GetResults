const express = require('express');

//new app that represents a running express app
const app = express(); //single app, used to setup configs that are used to listen to incoming requests that are being routed to express side from the node and pass it to diff route handlers

//app.get -> creating a brand new route handler with get method
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//express telling node to listen to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
