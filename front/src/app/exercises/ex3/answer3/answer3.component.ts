import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-answer3',
  templateUrl: './answer3.component.html',
  styleUrls: ['./answer3.component.scss']
})
export class Answer3Component implements OnInit {

  activeItem: Number = 0;

  @Input() detail: any;

  @Output() answerChecked = new EventEmitter();

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
  }

  onSelect(item) {
    this.activeItem = item.id;
  }

  ex3Verification() {
    if (this.activeItem == this.detail.answer) {
      this.toastr.success("Відповідь правильна. Переходимо до наступного завдання");
      this.answerChecked.emit("Answer correct");
      this.activeItem = 0;
    } else {
      this.toastr.error("Ви допустили помилку. Спробуйте ще раз");
    }
  }
}
