const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);

//new app that represents a running express app
const app = express(); //single app, used to setup configs that are used to listen to incoming requests that are being routed to express side from the node and pass it to diff route handlers

//app.use -> middleware
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

const authRoutes = require('./routes/authRoutes');
authRoutes(app);
//app.get -> creating a brand new route handler with get method
// app.get('/', (req, res) => {
//   res.send({ bye: 'Basila' });
// });

//express telling node to listen to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
