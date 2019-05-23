import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CodeEditorModel } from '@/models';
import { Ex1Component } from '../ex1.component';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit, AfterViewInit {
	editorCode: string;

	@Input() codeModel: CodeEditorModel;
	options:any = { maxLines: 1000, fontSize: '22px', printMargin: false };

	@ViewChild('editor') editor;

  constructor() { }

  ngOnInit() {
  	console.log(this.codeModel.text);
  }

  ngAfterViewInit() {
		this.editor.getEditor().setOptions({
			enableBasicAutocompletion: true
		});
		this.editor.getEditor().commands.addCommand({
			name: 'showOtherCompletions',
			bindKey: 'Ctrl-.',
			exec: function (editor) {
			}
		});
	}

	onChange(code) {
		this.editorCode = code;
	}

	// verification of the answer

	ex1Verification(){
		console.log(this.editorCode);
	}
}
