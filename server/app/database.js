const loki = require('lokijs');

const db = new loki('js-tower.json');

db.addCollection('users').insert([
    {id: 1, login: 'test', password: 'test', token: 'test-jwt-token'},
    {id: 2, login: 'demo', password: 'demo', token: 'demo-jwt-token'}
]);

db.addCollection('tasks').insert([]);

db.saveDatabase();
