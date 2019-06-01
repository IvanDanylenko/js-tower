import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {
	changePasswordForm: FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
		this.changePasswordForm = this.fb.group({
			password: ['']
		});
  }

	onChangePasswordSubmit() {
		console.log("Password changed (Fake)");
	}

	deleteProgress() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		currentUser.progress = {
			ex1Level: 0,
			ex1Score: 0,
			ex2Level: 0,
			ex2Score: 0,
			ex3Level: 0,
			ex3Score: 0
		}
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}
}
