import {ExerciseModel} from '@/models/exercise.model';

export class TaskLevelModel {
	id: number;
	name: string;
	tasks: ExerciseModel[];
}

export class SelectedTaskModel {
	levelId: number;
	taskId: number;
	constructor(level: number, task: number)
	{
		this.levelId = level;
		this.taskId = task;
	}
}