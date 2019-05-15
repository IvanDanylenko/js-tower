import { Component, OnInit } from '@angular/core';
import { ExerciseModel, SelectedTaskModel, TaskLevelModel, CodeEditorModel} from '@/models';
import { TaskService } from '@/_services/task.service';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.scss']
})
export class Ex1Component implements OnInit {
	show = false;
	taskList: TaskLevelModel[];
	currentExercise: ExerciseModel;
	editor: CodeEditorModel = new CodeEditorModel();

  constructor(private taskSrv: TaskService) { }

  ngOnInit() {
		this.taskSrv.getTaskList().subscribe(data => {
			this.taskList = data;
			this.currentExercise = this.taskList[0].tasks[0];
			this.editor = this.currentExercise.codeEditor[0];
			console.log(this.currentExercise);
			console.log(this.editor);
		});
	}

	onTaskChange(model: SelectedTaskModel) {
		console.log(model);
		const level = this.taskList.find(x => x.id === model.levelId);
		this.currentExercise = level.tasks.find(t => t.id === model.taskId);
		this.editor = this.currentExercise.codeEditor[0];
		console.log(this.currentExercise);
		console.log(this.editor);
	}
}
