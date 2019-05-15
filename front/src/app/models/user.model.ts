export class UserModel {
	id: number;
	login: string;
	token: string;
	score: number;
}

export class LoginModel {
	username: string;
	password: string;

	constructor(login: string, pass: string) {
		this.username = login;
		this.password = pass;
	}
}