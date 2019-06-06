import { Component, OnInit } from '@angular/core';
import { TaskService } from '@/_services/task.service';
import { SelectedTaskModel } from '@/models';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {
	taskList: any;
	currentExercise: any;
	answer: string;
	
	taskLevel: number = JSON.parse(localStorage.getItem('currentUser')).progress.ex1Level;
	taskId: number = JSON.parse(localStorage.getItem('currentUser')).progress.ex1Score;

	constructor(private taskService: TaskService, private toastr: ToastrService) { }

  ngOnInit() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.taskService.getEx2TaskList().subscribe(data => {
			this.taskList = data;
			// condition on last available task
			let lastTasks = this.taskList[this.taskList.length - 1].tasks;
			if (currentUser.progress.ex1Score == lastTasks[lastTasks.length - 1].id) {
				this.currentExercise = lastTasks[lastTasks.length - 1];
			} else {
				this.currentExercise = this.taskList[currentUser.progress.ex2Level].tasks[currentUser.progress.ex2Score];
			}
		});
	}
	
	onTaskChange(model: SelectedTaskModel) {
		const level = this.taskList.find(x => x.id === model.levelId);
		this.currentExercise = level.tasks.find(t => t.id === model.taskId);
	}

	onAnswerChecked() {
		const taskId = this.currentExercise.id;
		const nextTaskId = taskId + 1;
		const lastTasksLength = this.taskList[this.taskList.length - 1].tasks.length;
		const lastTaskId = this.taskList[this.taskList.length - 1].tasks[lastTasksLength - 1].id;
		// it was last task available
		if (nextTaskId > lastTaskId) {
			this.toastr.info("Ви виконали останнє завдання");
			let currentUser = JSON.parse(localStorage.getItem('currentUser'));
			currentUser.progress.ex2Score = taskId;
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
		currentUser.progress.ex2Score = taskId;
		currentUser.progress.ex2Level = taskLevel;
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}
}
