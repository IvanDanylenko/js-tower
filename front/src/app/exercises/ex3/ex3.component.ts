import { Component, OnInit } from '@angular/core';
import { ExerciseModel, SelectedTaskModel, TaskLevelModel, CodeEditorModel } from '@/models';
import { TaskService } from '@/_services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.component.html',
  styleUrls: ['./ex3.component.scss']
})
export class Ex3Component implements OnInit {
	taskList: any;
	currentExercise: any;
	tests: any;

	constructor(private taskService: TaskService, private toastr: ToastrService) { }

  ngOnInit() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.taskService.getEx3TaskList().subscribe(data => {
			this.taskList = data;
			this.currentExercise = this.taskList[currentUser.progress.ex3Level].tasks[currentUser.progress.ex3Score];
		});
	}
	
	onTaskChange(model: SelectedTaskModel) {
		const level = this.taskList.find(x => x.id === model.levelId);
		this.currentExercise = level.tasks.find(t => t.id === model.taskId);
		this.tests = this.currentExercise.tests;
	}

	onAnswerChecked() {
		console.log("answer checked");
	}
}
