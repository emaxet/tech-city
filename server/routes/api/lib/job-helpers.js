module.exports = {

  findJobsInCity: (knex, cityName, cb) => {
    knex('cities')
      .join('jobs', 'jobs.city_id', 'cities.id')
      .join('users', 'jobs.user_id', 'users.id')
      .select('users.username', 'jobs.title', 'jobs.description', 'jobs.url')
      .where({ 'cities.name': cityName})
      .then(cb);
  },

}