import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {ExerciseModel, CodeEditorModel} from '@/models';
import {AceDirective} from '@/helpers/ace.directive';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
	@Input() editor: CodeEditorModel;

	@ViewChild(AceDirective) aceEditor: AceDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
		this.loadComponent();
  	console.log(this.editor);
  }

	loadComponent() {

	}

	onChange() {}
}
