module.exports = {
  findAllCities: (knex, cb) => {
    knex('cities')
    .then(cb)
  }
}