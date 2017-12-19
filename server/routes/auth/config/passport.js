const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const authHelpers   = require('../lib/auth-helpers');
const jwt           = require('jsonwebtoken');
const config        = require('./config');

module.exports = (knex, passport) => {
//
  passport.serializeUser((user, done) => {
    done(null, user[0].id);
  });

  passport.deserializeUser((id, done) => {
    authHelpers.findFirstUserById(id, (user) => {
      done(null, user);
    }, (err) => {
      done(err, null);
    });
  });

  // LOCAL SIGNUP STRATEGY

  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true,
      session: false
    },

    (req, email, password, done) => {
      console.log(req.body);
      process.nextTick(() => {

        authHelpers.findUserByEmail(email, (user) => {
          if (user.length) {
            return done(null, false);
          } else {
            authHelpers.registerNewUser(req, (user) => {
              done(null, user);
            }, (err) => {
              done(err, null);
            });
          }
        }, (err) => {
          done(err, null);
        });
      });
    }
  ));

  // LOCAL LOGIN STRATEGY

  passport.use('local-login', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      session: false,
      passReqToCallback: true
    },

    (req, email, password, done) => {

      authHelpers.findUserByEmail(email, (user) => {
        if (!user.length) {
          const error = new Error('Incorrect email or password');
          error.name = 'IncorrectCredentialsError';
          return done(error, false);
        }
        if (!authHelpers.validPassword(user, password)) {
          const error = new Error('Incorrect email or password');
          error.name = 'IncorrectCredentialsError';
          return done(error, false);
        }
        const payload = {
          sub: user[0].id
        };
        const token = jwt.sign(payload, config.jwtSecret);
        const data = {
          name: user[0].username
        }
        return done(null, token, data);
      }, (err) => {
        return done(err);
      });

    }
  ));

}