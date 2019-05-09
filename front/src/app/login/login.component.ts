import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	constructor(
		private formBuilder: FormBuilder,
		private auth: AuthenticationService
	) { }

	ngOnInit() {
	}

	// login form with FormBuilder
	loginForm = this.formBuilder.group({
		login: [''],
		password: ['']
	});

	onSubmit():void {
		// console.log(this.loginForm.value);
		/* test authentication service */
		this.auth.getGithubUser();
	}
}