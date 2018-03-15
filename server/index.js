const express = require('express');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

//new app that represents a running express app
const app = express(); //single app, used to setup configs that are used to listen to incoming requests that are being routed to express side from the node and pass it to diff route handlers

//app.get -> creating a brand new route handler with get method
// app.get('/', (req, res) => {
//   res.send({ bye: 'Basila' });
// });

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);

//route handler 1
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

//route handler 2
app.get('/auth/google/callback', passport.authenticate('google'));

//express telling node to listen to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
