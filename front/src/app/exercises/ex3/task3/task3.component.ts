import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})
export class Task3Component implements OnInit {

	@Input() detail: any;

  constructor() { }

  ngOnInit() {
  }

}
