import { Component, Input, Output, EventEmitter, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-answer1',
  templateUrl: './answer1.component.html',
  styleUrls: ['./answer1.component.scss']
})

export class Answer1Component implements OnInit, AfterViewInit {
  editorCode: string;

  @Input() detail: any;

  @Output() answerChecked = new EventEmitter();

  options:any = { maxLines: 1000, fontSize: '22px', printMargin: false };

  @ViewChild('editor') editor;

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
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
    const tests = this.detail.tests;

    for (let i = 0; i < tests.length; i++) {
      if (!this.editorCode) {
        this.toastr.error("Ви допустили помилку. Спробуйте ще раз");
        return;
      }
      if (this.editorCode.indexOf(tests[i].value) == -1) {
        this.toastr.error("Ви допустили помилку. Спробуйте ще раз");
        return;
      }
    }

    this.toastr.success("Відповідь правильна. Переходимо до наступного завдання");
    this.answerChecked.emit("Answer correct");
  }
}
