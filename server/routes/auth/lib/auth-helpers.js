const ENV = process.env.ENV || "development";

const knexConfig = require('../../../../knexfile');
const knex       = require('knex')(knexConfig[ENV]);
const bcrypt     = require('bcrypt');
const passport   = require('passport');
const validator  = require('validator');

module.exports = {

  findFirstUserById: (id, cb1, err) => {
    knex('users')
    .where({id}).first()
    .then(cb1)
    .catch(err)
  },

  findUserByEmail: (email, cb, err) => {
     knex('users')
     .where({email: email})
     .then(cb)
     .catch(err)
  },

  registerNewUser: (req, cb, err) => {
    const hash = bcrypt.hashSync(req.body.password, 10);
    knex('users').insert({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: hash,
      username: req.body.username
    })
    .returning('*')
    .then(cb)
    .catch(err);
  },

  validPassword: (user, password) => {
    return bcrypt.compareSync(password, user[0].password);
  },

  emailExists: (email, cb) => {
    knex('users')
    .where({email: email})
    .then(cb)
  },

  validateRegisterForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
      isFormValid = false;
      errors.email = 'Please provide a correct email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 7) {
      isFormValid = false;
      errors.password = 'Password must have at least 6 characters.';
    }

    if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
      isFormValid = false;
      errors.username = 'Please provide your username.';
    }

    if (!isFormValid) {
      message = 'Check the form for errors.';
    }

    return {
      success: isFormValid,
      message,
      errors
    };
  },

  validateLoginForm: (payload) => {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || payload.email.trim().length === 0) {
      isFormValid = false;
      errors.email = 'Please provide your email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
      isFormValid = false;
      errors.password = 'Please provide your password.';
    }

    if (!isFormValid) {
      message = 'Check the form for errors.';
    }

    return {
      success: isFormValid,
      message,
      errors
    };
  }

}