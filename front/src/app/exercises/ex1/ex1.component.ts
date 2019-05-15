import { Component, OnInit } from '@angular/core';
import { ExerciseModel, TaskLevelModel} from '@/models';
import { TaskService } from '@/_services/task.service';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component implements OnInit {
	show = false;
	taskList: TaskLevelModel[];
	exercise: ExerciseModel;

  constructor(private taskSrv: TaskService) { }

  ngOnInit() {
		this.taskSrv.getTaskList().subscribe(data => {
			this.taskList = data;
			console.log(this.taskList);
			console.log(this.taskList[0].tasks);
		});
	}
}
