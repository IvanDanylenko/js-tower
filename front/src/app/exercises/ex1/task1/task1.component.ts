import {Component, Input, OnInit} from '@angular/core';
import {ExerciseModel} from '@/models';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss']
})

export class Task1Component implements OnInit {

	@Input() detail: ExerciseModel;

  constructor() { }

  ngOnInit() {
  }

}
