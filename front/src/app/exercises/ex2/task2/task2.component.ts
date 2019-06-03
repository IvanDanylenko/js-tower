import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component implements OnInit {

	options: any = { 
		maxLines: 1000, 
		fontSize: '22px', 
		printMargin: false 
	};

	@Input() detail: any;

	@ViewChild('editor') editor: any;

  constructor() { }

  ngOnInit() {
  }

	showDetail() {
		console.log(this.detail);
	}
}
