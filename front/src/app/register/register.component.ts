import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { AuthenticationService } from '../_services';

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
		private authService: AuthenticationService
	) { }

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
	}
}
