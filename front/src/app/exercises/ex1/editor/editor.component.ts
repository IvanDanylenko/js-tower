import {Component, Input, OnInit} from '@angular/core';
import {ExerciseModel} from '@/models';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
	@Input() detail: ExerciseModel;

  constructor() { }

  ngOnInit() {
  }

}
