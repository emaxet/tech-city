const express = require('express');
const cities = express.Router();
const cityHelpers = require('./lib/city-helpers');

module.exports = (knex) => {

  	cities.get('/cities', (req, res) => {

	    cityHelpers.findAllCities(knex, (cities) => {
	    	const cityData = [];

	    	function sleep(period){
  				return new Promise(resolve => setTimeout(() => resolve(), period));
			}

			async function run() {
				for (let i = 0; i < cities.length; i++) {
					await sleep(50);
		    		cityHelpers.findCityData(knex, cities[i], (data) => {
				    	cityData.push(data);
				    	if (i === cities.length - 1) {
				    		return res.json(cityData);
				    	}
		    		});
	    		}
			}

			run();
	    });
  	});

  return cities;

}