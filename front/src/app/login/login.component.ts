import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	loginForm: FormGroup;
	loading = false;
	submitted = false;
	returnUrl: string;

	constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router,
							private alertService: AlertService, private authService: AuthenticationService) {
		if (this.authService.currentUserValue) {
			this.router.navigate(['/']);
		}
	}

	ngOnInit() {
		this.loginForm = this.fb.group({
			login: ['', Validators.required],
			password: ['', Validators.required]
		});

		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}

	get f() { return this.loginForm.controls; }

	onSubmit() {
		this.submitted = true;
		if (this.loginForm.invalid) {
			return;
		}

		this.loading = true;
		this.authService.authenticate(this.f.login.value, this.f.password.value).pipe(first()).subscribe(
			data => {
				this.router.navigate(['/exercises']);
			},
			error => {
				this.alertService.error(error);
				this.loading = false;
			}
		);
	}
}