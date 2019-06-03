import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

	resetAllProgress() {
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

	resetEx1Progress() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		currentUser.progress = {
			ex1Level: 0,
			ex1Score: 0
		}
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}

	resetEx2Progress() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		currentUser.progress = {
			ex2Level: 0,
			ex2Score: 0
		}
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}

	resetEx3Progress() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		currentUser.progress = {
			ex3Level: 0,
			ex3Score: 0
		}
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}
}
