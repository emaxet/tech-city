module.exports = {

  findEventsInCity: (knex, cityName, cb) => {
    knex('cities')
      .join('events', 'events.city_id', 'cities.id')
      .join('users', 'events.creator_id', 'users.id')
      .select('users.username', 'events.title', 'events.description', 'events.image', 'events.keyword', 'events.start_date', 'events.end_date', 'events.start_time', 'events.end_time')
      .where({ 'cities.name': cityName})
      .then(cb);
  },

}