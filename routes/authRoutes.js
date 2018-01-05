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
};
