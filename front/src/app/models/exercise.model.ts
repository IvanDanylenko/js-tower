import { ExercisePartModel } from '@/models/exercisePart.model';
import { ExerciseTestModel } from '@/models/exerciseTest.model';
import { CodeEditorModel } from '@/models/codeEditor.model';

export class ExerciseModel {
	id: number;
	taskId: number;
	name: string;
	description: string;
	parts: ExercisePartModel[];
	tests: ExerciseTestModel[];
	codeEditor: CodeEditorModel;

	constructor() {
		this.parts = [];
		this.tests = [];
	}
}
