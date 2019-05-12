import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AlertService, AuthenticationService, UserService} from '../_services';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {User} from '../models';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	loading = false;
	submitted = false;

  constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private authService: AuthenticationService,
		private userService: UserService,
		private alertService: AlertService
	) {
		// redirect to home if already logged in
		if (this.authService.currentUserValue) {
			this.router.navigate(['/']);
		}
	}

  ngOnInit() {
		// register form with FormBuilder
		this.registerForm = this.formBuilder.group({
			login: ['', Validators.required],
			password: ['', Validators.required],
			passwordRepeat: ['', Validators.required]
		});
	}

	get f() { return this.registerForm.controls; }

	onSubmit() {
  	this.submitted = true;
		if (this.registerForm.invalid) {
			return;
		}

		this.loading = true;
		console.log('Ok');
		const user = new User();
		user.login = this.f.login.value;
		user.password = this.f.password.value;
		this.userService.register(user)
			.pipe(first())
			.subscribe(
				data => {
					this.alertService.success('Registration successful', true);
					this.router.navigate(['/login']);
				},
				error => {
					this.alertService.error(error);
					this.loading = false;
				});
	}
}
