import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-answer3',
  templateUrl: './answer3.component.html',
  styleUrls: ['./answer3.component.scss']
})
export class Answer3Component implements OnInit {

	@Input() detail: any;

	@Output() answerChecked = new EventEmitter();

	constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

	ex3Verification() {
		console.log("Success");
		/* const tests = this.detail.tests;

		for (let i = 0; i < tests.length; i++) {
			if (this.editorCode.indexOf(tests[i].value) == -1) {
				this.toastr.error("Ви допустили помилку. Спробуйте ще раз");
				return;
			}
		}

		this.toastr.success("Відповідь правильна. Переходимо до наступного завдання");
		this.answerChecked.emit("Answer correct"); */
	}
}
