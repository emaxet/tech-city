const express = require('express');
const cities = express.Router();
const cityHelpers = require('./lib/city-helpers');

module.exports = (knex) => {

  cities.get('/cities', (req, res) => {
    cityHelpers.findAllCities(knex, (cities) => {
      res.json(cities);
    });
  });

  return cities;

}