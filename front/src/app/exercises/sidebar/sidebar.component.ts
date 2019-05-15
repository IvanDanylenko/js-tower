import { Component, OnInit } from '@angular/core';
import { TaskService } from '@/_services/task.service';

import { TaskLevelModel, ExerciseModel } from '@/models';;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	show = false;
	taskList: TaskLevelModel[];
	exersiseList: ExerciseModel[];
	constructor(private taskSrv: TaskService) {
	}

	ngOnInit() {
		this.taskSrv.getTaskList().subscribe(data => {
			this.taskList = data;
			console.log(this.taskList);
		});
	}

	onExersiseSelect(taskId: number) {
		this.taskSrv.getTaskExercises(taskId).subscribe(data => {
			this.exersiseList = data;
			console.log(this.exersiseList);
		});
	}
}
