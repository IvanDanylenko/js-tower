import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-answer2',
  templateUrl: './answer2.component.html',
  styleUrls: ['./answer2.component.scss']
})
export class Answer2Component implements OnInit {
  userAnswer: string = "";
  
  @Input() detail: any;

  @Output() answerChecked = new EventEmitter();

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  ex2Verification() {
    if (this.userAnswer == this.detail.answer) {
      this.answerChecked.emit("Answer correct");
      this.toastr.success("Відповідь правильна. Переходимо до наступного завдання");
      this.userAnswer = "";
    } else {
      this.toastr.error("Ви допустили помилку. Спробуйте ще раз");
    }
    // console.log(this.answer);
  }
}
