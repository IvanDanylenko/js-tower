import { Component, Input, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CodeEditorModel } from '@/models';
import { TaskService } from '@/_services/task.service';

@Component({
  selector: 'app-answer1',
  templateUrl: './answer1.component.html',
	styleUrls: ['./answer1.component.scss']
})

export class Answer1Component implements OnInit, AfterViewInit {
	editorCode: string;

	@Input() detail: any;
	options:any = { maxLines: 1000, fontSize: '22px', printMargin: false };

	@ViewChild('editor') editor;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  	// console.log(this.codeModel.text);
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
		/* Verification */
		
		// this.taskService.getEx1TaskList().subscribe(data => {
		// 	console.log(data);
		// });

		// this.detail;
		// console.log(this.detail.codeEditor[0].text);
		console.log(this.editorCode);

		// for (let i = 0; i < )
	}
}
