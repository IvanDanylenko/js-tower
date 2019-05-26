import { Component, OnInit } from '@angular/core';
import { TaskService } from '@/_services/task.service';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {
	taskList;
	currentExercise;


	constructor(private taskService: TaskService) { }

  ngOnInit() {
		this.taskService.getEx2TaskList().subscribe(data => {
			this.taskList = data;
			this.currentExercise = this.taskList[0].tasks[0];
			// this.currentExercise = this.taskList[0].tasks[0];
			// this.editorModel = this.currentExercise.codeEditor[0];

			console.log(this.currentExercise);
		})
	}
	
}
