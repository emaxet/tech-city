const ENV = process.env.ENV || "development";

const knexConfig = require('../../../../knexfile');
const knex       = require('knex')(knexConfig[ENV]);
const bcrypt     = require('bcrypt');

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
    return bcrypt.compareSync(password, user[0].password)
  }

}