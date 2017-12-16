const express  = require('express');
const router   = express.Router();
const passInit = require('./config/passport');


module.exports = (knex, passport) => {

  // initialize passport configuration
  passInit(knex, passport);

  router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/api/v1/users',
    failureFlash: true
  }));

  router.post('/login', passport.authenticate('local-login', {
        successRedirect : '/api/v1/users',
        failureRedirect : '/',
        failureFlash : true
    }));

  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  return router;

}
