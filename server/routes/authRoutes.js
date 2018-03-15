const passport = require('passport');

module.exports = app => {
  //route handler 1
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //route handler 2
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  //route handler 3
  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
