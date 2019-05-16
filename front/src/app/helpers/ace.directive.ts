import {Directive, ElementRef, EventEmitter} from '@angular/core';

// declare the ace library
declare var ace: any;

@Directive({
	// tslint:disable-next-line:directive-selector
	selector: 'ace-editor',
	inputs: [ 'text'],
	outputs: ['textChanged']
})
export class AceDirective {
	private editor;
	public textChanged: EventEmitter<string>;

	/**
	 * Sets the editor's text.
	 */
	set text(s: string) {
		this.editor.setValue(s);
		this.editor.clearSelection();
		this.editor.focus();
	}

	constructor(private element: ElementRef) {
		this.textChanged = new EventEmitter<string>();

		// this is the <div ace-editor> root element
		const el = element.nativeElement;
		el.classList.add('editor');
		// el.style.height = "250px";
		// el.style.width = "300px";
		this.editor = ace.edit(el);
		// this.editor.resize(true);
		this.editor.setTheme('ace/theme/iplastic');
		this.editor.setOptions({
			fontSize: '22px',
			enableBasicAutocompletion: true,
			enableLiveAutocompletion: true
		});

		this.editor.getSession().setMode('ace/mode/javascript');

		this.editor.on('change', (e) => {
			// discard the delta (e), and provide whole document
			this.textChanged.next(this.editor.getValue());
		});
	}
}