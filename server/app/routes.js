const api = require('./controllers/api')
module.exports = function(app){
	app.get('/api/users', api.userList);
	app.post('/api/auth/login', api.login);
    app.post('/api/auth/registration', api.registration);
};
