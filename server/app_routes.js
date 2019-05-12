modeule.exports = function(app, db){
	
	app.post('/login', (req, res) => {
		const user = {login: req.body.username, password: req.body.password };
		db.collection('users').findOne(user, (err, item)=>{
			if(err){
				res.send({'error': 'An error has occured'});
			} else {
				res.send(item);
			}
		});
	});

	app.post('/registration', (req, res) => {
		const user = {login: req.body.username, password: req.body.password };
		db.collection('users').insert(user, (err, result)=>{
			if(err){
				res.send({'error': 'An error has occured'});
			} else {
				res.send(result.ops[0]);
			}
		});
	});

	app.get('/test', (req, res) => {
		res.send('Test');
	})
};
