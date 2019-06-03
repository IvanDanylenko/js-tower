import { Component, OnInit } from '@angular/core';
import { TaskService } from '@/_services/task.service';
import { SelectedTaskModel } from '@/models';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.scss']
})
export class Ex2Component implements OnInit {
	taskList: any;
	currentTask: any;
	answer: string;
	
	taskLevel: number = JSON.parse(localStorage.getItem('currentUser')).progress.ex1Level;
	taskId: number = JSON.parse(localStorage.getItem('currentUser')).progress.ex1Score;

	constructor(private taskService: TaskService) { }

  ngOnInit() {
		this.taskService.getEx2TaskList().subscribe(data => {
			this.taskList = data;
			this.currentTask = this.taskList[this.taskLevel].tasks.find(t => t.id === this.taskId + 1);
		});
	}
	
	onTaskChange(model: SelectedTaskModel) {
		const level = this.taskList.find(x => x.id === model.levelId);
		this.currentTask = level.tasks.find(t => t.id === model.taskId);
	}

	onAnswerChecked() {
		const currentUser = JSON.parse(localStorage.getItem('currentUser'));
		if (this.taskList[this.taskLevel].tasks.find(t => t.id === this.taskId + 1)) {
			console.log("Choose next task on this level");
			currentUser.progress.ex2Score++;
			this.taskId++;
			this.currentTask = this.taskList[this.taskLevel].tasks.find(t => t.id === this.taskId + 1);
		} else if (this.taskList.length > this.taskLevel) {
			currentUser.progress.ex2Level++; 
			currentUser.progress.ex2Score++;
			console.log("Choose first task on next level");
			console.log("Task Level" + this.taskLevel);
		}
		localStorage.setItem('currentUser', JSON.stringify(currentUser));
	}
}
