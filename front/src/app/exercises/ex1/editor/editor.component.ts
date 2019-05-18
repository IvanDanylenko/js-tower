import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { CodeEditorModel, ExerciseModel } from '@/models';
import { TaskService } from '@/_services/task.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
	@Input() codeModel: CodeEditorModel;
	@Input() detail: ExerciseModel;
	@ViewChild('editor') editor;

	options: any = { enableBasicAutocompletion: true, maxLines: 1000, fontSize: '22px', printMargin: false };

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  	console.log(this.detail);
  }

	onCheck() {
		const value = this.editor.getEditor().session.getValue();
		//if (values) {
				this.toastr.success("Complete");
		//	} else {
		//		this.toastr.error(" Ups");
		//	}
	//	}
	}
}
