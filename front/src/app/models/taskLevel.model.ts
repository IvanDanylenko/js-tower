import {TaskModel} from '@/models/task.model';

export class TaskLevelModel {
	id: number;
	name: string;
	tasks: TaskModel[];
}
