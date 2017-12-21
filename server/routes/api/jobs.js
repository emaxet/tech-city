const express = require('express');
const jobs = express.Router();
const jobHelpers = require('./lib/job-helpers');

module.exports = (knex) => {

  jobs.get('/:city_name/jobs', (req, res) => {
    const cityName = req.params.city_name;
    jobHelpers.findJobsInCity(knex, cityName, (jobs) => {
      res.json(jobs);
    });
  });

  jobs.post('/:city_name/jobs', (req, res) => {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      new Promise((resolve, reject) => {
        resolve(knex('cities').select('id').where('name', req.body.cityName));
      })
        .then((data) => {
          knex('jobs')
            .insert({
              'city_id': data[0].id,
              'title': req.body.title,
              'description': req.body.description,
              'url': req.body.url,
              'company': req.body.company,
              'user_id': decoded.sub
            })
            .then(() => {
              res.send(200);
            });
        });
    });
  });

  jobs.delete('/:city_name/jobs/:job_id', (req, res) => {
    jobHelpers.deleteEvent(knex, req.params.job_id, () => {
      res.send(200);
    });
  });

  return jobs;

};