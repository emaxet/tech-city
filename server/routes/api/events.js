  const express = require('express');
const events = express.Router();
const eventHelpers = require('./lib/event-helpers');
const jwt = require('jsonwebtoken');
const config = require('../auth/config/config');

module.exports = (knex) => {

  events.get('/:city_name/events', (req, res) => {
    const cityName = req.params.city_name;
    eventHelpers.findEventsInCity(knex, cityName, (events) => {
      res.json(events);
    });
  });

  events.post('/:city_name/events', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      new Promise((resolve, reject) => {
        resolve(knex('cities').select('id').where('name', req.body.cityName));
      })
        .then((data) => {
          knex('events')
            .insert({
              'creator_id': decoded.sub,
              'type_id': req.body.type_id,
              'city_id': data[0].id,
              'title': req.body.title,
              'description': req.body.description,
              'image': req.body.image,
              'keyword': req.body.keyword,
              'start_date': req.body.start_date,
              'end_date': req.body.end_date,
              'start_time': req.body.start_time,
              'end_time': req.body.end_time,
              'location': req.body.location
            })
            .then(() => {
              res.send(200);
            });
        });
    });
  });

  events.put('/:city_name/events/:event_id', (req, res) => {
    eventHelpers.updateEventsInCity(knex, req, (newEvent) => {
      res.send(200);
    });
  });

  events.put('/:city_name/events/:event_id/like', (req, res) => {
    knex('events')
      .where({id: req.params.event_id})
      .update({like: req.body.like})
      .then(() => {
        res.send(200);
      });
  });

  events.delete('/:city_name/events/:event_id', (req, res) => {
    eventHelpers.deleteEvent(knex, req.params.event_id, () => {
      res.send(200);
    });
  });

  events.get('/:city_name/events/search/:query', (req, res) => {
    eventHelpers.findEventsFromSearchQuery(knex, req, (events) => {
      res.json(events);
    });
  });

  return events;
};



