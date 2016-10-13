const util = require('util');
const winston = require('winston');
const request = require('request');

var slackTransport = function (options) {
  this.name = 'Slack logger';
  this.level = options.level;
  this.webHook = options.webHook;
};

util.inherits(slackTransport, winston.Transport);

slackTransport.prototype.log = function (level, msg, meta, callback) {
  var options = {
    uri: this.webHook,
    method: 'POST',
    json: {
      "text": msg
    }
  };

  request(options, function (error, response, body) {
  });
  callback(null, true);
};

module.exports = slackTransport;