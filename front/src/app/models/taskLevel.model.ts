import {ExerciseModel} from '@/models/exercise.model';

export class TaskLevelModel {
	id: number;
	name: string;
	tasks: ExerciseModel[];
}
