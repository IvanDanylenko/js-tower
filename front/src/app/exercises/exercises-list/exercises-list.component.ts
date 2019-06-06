import { Component, OnInit } from '@angular/core';
import { TaskService } from '@/_services/task.service';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss']
})
export class ExercisesListComponent implements OnInit {
	ex1Current: number;
	ex2Current: number;
	ex3Current: number;
	ex1Total: number = 10;
	ex2Total: number = 10;
	ex3Total: number = 10;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
		// get total number of all tasks for EX 1
		/* this.taskService.getEx1TaskList().subscribe(data => {
			for (let i = 0; i < data.length; i++) {
				this.ex1Total += data[i].tasks.length;
			}
		});
		this.taskService.getEx2TaskList().subscribe(data => {
			for (let i = 0; i < data.length; i++) {
				this.ex2Total += data[i].tasks.length;
			}
		});
		this.taskService.getEx3TaskList().subscribe(data => {
			for (let i = 0; i < data.length; i++) {
				this.ex3Total += data[i].tasks.length;
			}
		}); */
		// get progress of curent user
		this.ex1Current = JSON.parse(localStorage.getItem('currentUser')).progress.ex1Score;
		this.ex2Current = JSON.parse(localStorage.getItem('currentUser')).progress.ex2Score;
		this.ex3Current = JSON.parse(localStorage.getItem('currentUser')).progress.ex3Score;
  }

}
