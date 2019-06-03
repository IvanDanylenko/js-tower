import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {TaskLevelModel,  SelectedTaskModel} from '@/models';

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

	constructor() {
	}

	ngOnInit() {
	}

	onTaskSelect(levelId: number, taskId: number) {
		this.taskChange.emit(new SelectedTaskModel(levelId, taskId));
	}
}
