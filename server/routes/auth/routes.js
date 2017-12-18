const express  = require('express');
const router   = express.Router();
const passInit = require('./config/passport');
const logout   = require('express-passport-logout');


module.exports = (knex, passport) => {

  // initialize passport configuration
  passInit(knex, passport);

  router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/api/v1/users',
    failureRedirect: '/',
    failureFlash: true
  }));

  router.post('/login', passport.authenticate('local-login', {
    successRedirect : '/api/v1/users',
    failureRedirect : '/',
    failureFlash : true
  }));

  router.get('/logout', function (req, res){
    req.session.destroy(function (err) {
      res.redirect('/api/v1/users');
    });
  });

  return router;

}
