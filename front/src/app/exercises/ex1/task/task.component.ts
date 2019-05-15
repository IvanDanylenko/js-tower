import {Component, Input, OnInit} from '@angular/core';
import {ExerciseModel} from '@/models';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {

	@Input() detail: ExerciseModel;

  constructor() { }

  ngOnInit() {
  }

}
