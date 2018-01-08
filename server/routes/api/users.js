const express = require('express');
const users = express.Router();

const userHelper = require('./lib/user-helpers');

module.exports = (knex) => {

  users.get('/', (req, res) => {
    userHelper.findAllUsers(knex, (users) => res.json(users));
  });

  users.get('/:user_id/chats/:city_name', (req, res) => {
  		userHelper.findChatsByUserId(knex, req.params, (chats) => {
  			res.json(chats);
  		});
  	});

  return users;
};

