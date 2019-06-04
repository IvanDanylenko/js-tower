import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.scss']
})
export class CabinetComponent implements OnInit {


  constructor(private toastr: ToastrService) { }

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
		this.toastr.success("Прогрес всіх вправ успішно оновлено");
	}

	resetEx1Progress() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		currentUser.progress.ex1Level = 0;
		currentUser.progress.ex1Score = 0;
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
		this.toastr.success("Прогрес вправи \"Тренуй себе\" успішно оновлено");
	}

	resetEx2Progress() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		currentUser.progress.ex2Level = 0;
		currentUser.progress.ex2Score = 0;
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
		this.toastr.success("Прогрес вправи \"Визнач результат\" успішно оновлено");
	}

	resetEx3Progress() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		currentUser.progress.ex3Level = 0;
		currentUser.progress.ex3Score = 0;
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
		this.toastr.success("Прогрес вправи \"Перевір знання\" успішно оновлено");
	}
}
