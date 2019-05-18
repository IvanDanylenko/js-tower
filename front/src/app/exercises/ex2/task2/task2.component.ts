import {Component, OnInit, ViewChild, Input} from '@angular/core';
import { CodeEditorModel} from '@/models';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {
	options: any = {maxLines: 1000, fontSize: '22px', printMargin: false, enableBasicAutocompletion: true};
	@Input() codeModel: CodeEditorModel = new CodeEditorModel();
	@ViewChild('editor') editor;

  constructor() { }

  ngOnInit() {
  	this.codeModel.text = '';
  }
}
