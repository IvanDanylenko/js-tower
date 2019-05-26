import { Component, OnInit } from '@angular/core';
import { ExerciseModel, SelectedTaskModel, TaskLevelModel, CodeEditorModel } from '@/models';
import { TaskService } from '@/_services/task.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component implements OnInit {
	show: Boolean = false;
	taskList: TaskLevelModel[];
	currentExercise: ExerciseModel;
	editorModel: CodeEditorModel = new CodeEditorModel();

  constructor(private taskService: TaskService, private toastr: ToastrService) { }

  ngOnInit() {
		this.taskService.getEx1TaskList().subscribe(data => {
			this.taskList = data;
			this.currentExercise = this.taskList[0].tasks[0];
			this.editorModel = this.currentExercise.codeEditor[0];
			// console.log(this.currentExercise);
			// console.log(this.editorModel);
		});
	}

	onTaskChange(model: SelectedTaskModel) {
		// console.log(model);
		const level = this.taskList.find(x => x.id === model.levelId);
		this.currentExercise = level.tasks.find(t => t.id === model.taskId);
		this.editorModel = this.currentExercise.codeEditor[0];
		// console.log(this.currentExercise);
		// console.log(this.editorModel);
		this.toastr.success("Hello, I'm the toastr message.");
	}
}
