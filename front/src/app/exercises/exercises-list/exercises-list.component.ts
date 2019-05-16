import { Component, OnInit } from '@angular/core';
import { TaskService } from '@/_services/task.service';

@Component({
  selector: 'app-exercises-list',
  templateUrl: './exercises-list.component.html',
  styleUrls: ['./exercises-list.component.scss']
})
export class ExercisesListComponent implements OnInit {
	ex1Current: number;
	ex1Total: number = 0;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
		// get total number of all tasks for EX 1
		this.taskService.getTaskList().subscribe(data => {
			for (let i = 0; i < data.length; i++) {
				for (let j = 0; j < data[i].tasks.length; j++) {
					this.ex1Total++;
				}
			}
		});
		// get progress of curent user
		this.ex1Current = JSON.parse(localStorage.getItem('currentUser')).score;
  }

}
