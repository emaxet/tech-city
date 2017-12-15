const express = require('express');
const users = express.Router();

const userHelper = require('./lib/user-helpers');

module.exports = (knex) => {

  users.get('/', (req, res) => {
    userHelper.findAllUsers(knex, (users) => res.json(users));
  });

  return users;
}

