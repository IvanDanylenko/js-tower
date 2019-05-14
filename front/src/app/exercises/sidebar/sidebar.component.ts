import { Component, OnInit } from '@angular/core';
import { TaskService } from '@/_services/task.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
	show: boolean = false;

  constructor(private taskSrv: TaskService) { }

  ngOnInit() {
// const data = this.taskSrv.Observable<Task>
  }

}
