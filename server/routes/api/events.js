const express = require('express');
const events = express.Router();
const eventHelpers = require('./lib/event-helpers');

module.exports = (knex) => {

  events.get('/:city_name/events', (req, res) => {
    const cityName = req.params.city_name;
    eventHelpers.findEventsInCity(knex, cityName, (events) => {
      res.json(events);
    });
  });

  events.post('/:city_name/events', (req, res) => {
    knex('events')
      .insert({
        'creator_id': req.body.creator_id,
        'type_id': req.body.type_id,
        'city_id': req.body.city_id,
        'title': req.body.title,
        'description': req.body.description,
        'image': req.body.image,
        'keyword': req.body.keyword,
        'start_date': req.body.start_date,
        'end_date': req.body.end_date,
        'start_time': req.body.start_time,
        'end_time': req.body.end_time
      // 'location': req.location
      })
      .then(() => {
        res.send(200);
      });
  });

  return events;
};



