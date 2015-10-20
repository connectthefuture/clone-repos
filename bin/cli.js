#!/usr/bin/env node

var minimist = require('minimist');
var cli = require('minimist-events')(minimist);
var union = require('union-value');
var clone = require('../');

var config = {};

cli.on('owner', function (owner) {
  union(config, 'owner', owner);
});

cli.on('username', function (username) {
  config.auth = config.auth || {};
  config.auth.username = username;
  config.auth.type = 'basic';
});

cli.on(0, function (dest) {
  config.dest = dest;
});

cli.on('dest', function (dest) {
  config.dest = dest;
});

cli.on('password', function (pass) {
  config.auth = config.auth || {};
  config.auth.password = pass;
  config.auth.type = 'basic';
});

cli.on('token', function (token) {
  config.auth = config.auth || {};
  config.auth.token = token;
  config.auth.type = 'oauth';
});

cli.on('end', function () {
  clone(config);
});

cli.parse(process.argv.slice(2), {
  alias: {
    owner: 'o',
    username: 'u',
    password: 'p',
    token: 't',
    dest: 'd'
  }
});
