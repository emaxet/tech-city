module.exports = {

  findAllUsers: (knex, cb) => {
    knex('users').then(cb);
  },

}