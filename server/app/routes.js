const authApi = require('./controllers/authApi');
const taskApi = require('./controllers/taskApi');

module.exports = function(app){
	app.get('/api/user/list', authApi.userList);
	app.post('/api/user/score', authApi.saveScore);

	app.post('/api/auth/login', authApi.login);
	app.post('/api/auth/logout', authApi.logout);
    app.post('/api/auth/register', authApi.register);

    app.get('/api/task/list', taskApi.taskList);
};
