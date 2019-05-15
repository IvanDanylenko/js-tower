import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TaskService } from '@/_services/task.service';

import {TaskLevelModel,  SelectedTaskModel} from '@/models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	show = false;
	@Input() taskList: TaskLevelModel[];
	@Output() taskChange: EventEmitter<SelectedTaskModel> = new EventEmitter();

	constructor(private taskSrv: TaskService) {
	}

	ngOnInit() {
		this.taskSrv.getTaskList().subscribe(data => {
			this.taskList = data;
		});
	}

	onTaskSelect(levelId: number, taskId: number) {
		this.taskChange.emit(new SelectedTaskModel(levelId, taskId));
	}
}
