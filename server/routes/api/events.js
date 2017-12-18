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

  return events;

};



