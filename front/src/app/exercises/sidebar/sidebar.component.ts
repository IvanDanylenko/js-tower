import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {TaskLevelModel,  SelectedTaskModel} from '@/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	showTasksList: boolean = false;
	showSettings: boolean = false;
	
	@Input() taskList: [];
	@Output() taskChange: EventEmitter<SelectedTaskModel> = new EventEmitter();

	constructor(private toastr: ToastrService) {
	}

	ngOnInit() {
	}

	onTaskSelect(levelId: number, taskId: number) {
		this.taskChange.emit(new SelectedTaskModel(levelId, taskId));
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
		this.toastr.success("Прогрес вправи успішно оновлено");
	}
}
