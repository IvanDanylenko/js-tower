import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer2',
  templateUrl: './answer2.component.html',
  styleUrls: ['./answer2.component.scss']
})
export class Answer2Component implements OnInit {
	userAnswer: string = "";
	
	@Input() currentTask: any;

	@Output() answerChecked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

	checkAnswer() {
		if (this.userAnswer == this.currentTask.answer) {
			this.answerChecked.emit("Answer correct");
		}
		// console.log(this.answer);
	}
}
