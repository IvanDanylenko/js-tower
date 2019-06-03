import { Component, OnInit } from '@angular/core';
import { ExerciseModel, SelectedTaskModel, TaskLevelModel, CodeEditorModel } from '@/models';
import { TaskService } from '@/_services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component implements OnInit {
	show: Boolean = false;
	taskList: TaskLevelModel[];
	currentExercise: ExerciseModel;
	tests: any;

  constructor(private taskService: TaskService, private toastr: ToastrService) { }

  ngOnInit() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.taskService.getEx1TaskList().subscribe(data => {
			this.taskList = data;
			this.currentExercise = this.taskList[currentUser.progress.ex1Level].tasks[currentUser.progress.ex1Score];
		});
	}

	onTaskChange(model: SelectedTaskModel) {
		const level = this.taskList.find(x => x.id === model.levelId);
		this.currentExercise = level.tasks.find(t => t.id === model.taskId);
		this.tests = this.currentExercise.tests;
	}

	onAnswerChecked() {
		const taskId = this.currentExercise.id;
		const nextTaskId = taskId + 1;
		const lastTasksLength = this.taskList[this.taskList.length - 1].tasks.length;
		const lastTaskId = this.taskList[this.taskList.length - 1].tasks[lastTasksLength -1].id;
		// it was last task available
		if (nextTaskId > lastTaskId) {
			this.toastr.error("Ви виконали останнє завдання");
			let currentUser = JSON.parse(localStorage.getItem('currentUser'));
			currentUser.progress.ex1Score = taskId;
			localStorage.setItem('currentUser', JSON.stringify(currentUser));
			return;
		}
		// redirect to next task
		let taskLevel;

		for (let i = 0; i < this.taskList.length; i++) {
			let levelLastTaskId = this.taskList[i].tasks[this.taskList[i].tasks.length - 1].id;
			if (nextTaskId <= levelLastTaskId) {
				taskLevel = i;
				this.currentExercise = this.taskList[taskLevel].tasks.find(t => t.id === nextTaskId);
				break;
			}
		}

		// memorize in localStorage
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		currentUser.progress.ex1Score = taskId;
		currentUser.progress.ex1Level = taskLevel;
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}
}
