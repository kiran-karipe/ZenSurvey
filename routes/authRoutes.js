const passport = require('passport');

module.exports = app => {
  app.get(                                      // express app telling it to use passport whenever it sees arguement '/auth/google'
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']               //options object - asking google to give us user's profile and their email
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
