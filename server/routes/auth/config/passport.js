const LocalStrategy = require('passport-local').Strategy;
const bcrypt        = require('bcrypt');
const authHelpers   = require('../lib/auth-helpers');

module.exports = (knex, passport) => {

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
      passReqToCallback: true
    },

    (req, email, password, done) => {
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
    },

    (email, password, done) => {

      authHelpers.findUserByEmail(email, (user) => {
        console.log(user);
        if (!user.length) {
          return done(null, false);
        }
        if (authHelpers.validPassword(user, password)) {
          return done(null, user);
        }
        return done(null, false);
      }, (err) => {
        return done(err);
      });

    }
  ));

}