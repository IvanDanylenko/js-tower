import { ExercisePartModel } from '@/models/exercisePart.model';
import { ExerciseTestModel } from '@/models/exerciseTest.model';
import { CodeEditorModel } from '@/models/codeEditor.model';

export class ExerciseModel {
	id: number;
	taskId: number;
	name: string;
	description: string;
	tasks: ExercisePartModel[];
	tests: ExerciseTestModel[];
	codeEditor: CodeEditorModel;

	constructor() {
		this.tasks = [];
		this.tests = [];
	}
}
