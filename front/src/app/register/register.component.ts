import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthenticationService } from '../_services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
		private formBuilder: FormBuilder,
		private auth: AuthenticationService
	) { }

  ngOnInit() {
	}
	
	// register form with FormBuilder
	registerForm = this.formBuilder.group({
		"login": [''],
		"password": [''],
		"passwordRepeat": ['']
	});

	onSubmit():void {
		console.log('Ok');
	}
}
