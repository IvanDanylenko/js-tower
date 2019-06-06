const loki = require('lokijs');

const db = new loki('js-tower.json');

module.exports = db;
