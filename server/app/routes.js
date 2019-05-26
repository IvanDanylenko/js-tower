const authApi = require('./controllers/authApi');
const taskApi = require('./controllers/taskApi');

module.exports = function(app){
	app.get('/api/user/list', authApi.userList);
	app.post('/api/user/score', authApi.saveScore);

	app.post('/api/auth/login', authApi.login);
	app.post('/api/auth/logout', authApi.logout);
  app.post('/api/auth/register', authApi.register);

	app.get('/api/ex1/task/list', taskApi.ex1TaskList);
	app.get('/api/ex2/task/list', taskApi.ex2TaskList);
  app.get('/api/ex3/task/list', taskApi.ex3TaskList);
};
